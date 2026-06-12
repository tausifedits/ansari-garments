const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const fs = require('fs');

const config = require('./config/config');
const Product = require('./models/Product');
const { seedDatabase } = require('../database/seed');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Broadcast WebSocket Updates
function broadcastUpdate() {
  const message = JSON.stringify({ event: 'products_changed' });
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(config.PUBLIC_DIR));

// Products & Upload Routes
const productsRouter = require('./routes/products')(broadcastUpdate);
app.use('/', productsRouter);

// WebSocket Server Handlers
wss.on('connection', (ws) => {
  console.log('Client connected via WebSocket');
  ws.on('close', () => console.log('Client disconnected'));
});

// Startup diagnostics
console.log('=== Ansari Garments Startup Diagnostics ===');
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'not set (development)'}`);
console.log(`Current Working Directory: ${process.cwd()}`);
console.log(`PORT: ${config.PORT}`);
console.log(`MONGODB_URI defined: ${config.MONGODB_URI ? 'YES' : 'NO'}`);
console.log('===========================================');

// Setup and start Database Connection
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';
  const MONGO_URI = config.MONGODB_URI;
  
  if (isProduction) {
    console.log('Attempting connection to MongoDB Atlas...');
    try {
      await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 10000 });
      console.log('MongoDB Atlas connected successfully');
    } catch (err) {
      console.error('MongoDB connection failed:');
      console.error(err);
      process.exit(1);
    }
  } else {
    // Development Mode
    try {
      console.log('Attempting connection to local MongoDB at', MONGO_URI);
      await mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 2000 });
      console.log('Connected to local MongoDB server successfully!');
      await seedDatabase(Product);
    } catch (err) {
      console.error('MongoDB connection failed:');
      console.error(err);
      console.log('Starting local embedded MongoDB (mongodb-memory-server) in fallback mode...');
      
      try {
        const dbPath = config.DB_DATA_PATH;
        if (!fs.existsSync(dbPath)) {
          fs.mkdirSync(dbPath, { recursive: true });
        }
        const { MongoMemoryServer } = require('mongodb-memory-server');
        const mongod = await MongoMemoryServer.create({
          instance: {
            dbPath: dbPath, // Persistent folder in database/db-data
            storageEngine: 'wiredTiger',
            port: 27017,
            dbName: 'ansari_garments'
          }
        });
        
        const fallbackUri = mongod.getUri();
        console.log('Local MongoDB Memory Server started successfully at:', fallbackUri);
        
        await mongoose.connect(fallbackUri);
        console.log('Connected to embedded MongoDB fallback server!');
        await seedDatabase(Product);
      } catch (fallbackErr) {
        console.error('CRITICAL: Failed to launch local database memory server:', fallbackErr.message);
        process.exit(1);
      }
    }
  }

  server.listen(config.PORT, '0.0.0.0', () => {
    console.log(`==================================================`);
    console.log(`Ansari Garments Showroom Server running at:`);
    console.log(`- Web App: http://localhost:${config.PORT}/`);
    console.log(`- Admin panel: http://localhost:${config.PORT}/admin.html`);
    console.log(`WebSocket Server integrated and active.`);
    console.log(`==================================================`);
  });
}

startServer();
