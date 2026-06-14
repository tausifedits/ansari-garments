const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

// Load .env file if running in non-production environment
if (!isProduction) {
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
}

// In production, validate that required environment variables are present
if (isProduction) {
  if (!process.env.MONGODB_URI) {
    throw new Error('CRITICAL CONFIGURATION ERROR: MONGODB_URI environment variable is missing in production.');
  }
  if (!process.env.ADMIN_ACCESS_KEY) {
    throw new Error('CRITICAL CONFIGURATION ERROR: ADMIN_ACCESS_KEY environment variable is missing in production.');
  }
}

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: isProduction ? process.env.MONGODB_URI : (process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ansari_garments'),
  ADMIN_ACCESS_KEY: isProduction ? process.env.ADMIN_ACCESS_KEY : (process.env.ADMIN_ACCESS_KEY || 'AnsariAdmin2026'),
  DB_DATA_PATH: path.join(__dirname, '../../database/db-data'),
  PUBLIC_DIR: path.join(__dirname, '../../Frontend'),
  UPLOAD_DIR: path.join(__dirname, '../../Frontend/Assets/Uploaded')
};
