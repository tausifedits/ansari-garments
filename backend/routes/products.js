const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Product = require('../models/Product');
const checkAdminAuth = require('../middleware/auth');
const config = require('../config/config');

module.exports = function(broadcastUpdate) {
  const router = express.Router();

  // Ensure upload directory exists
  if (!fs.existsSync(config.UPLOAD_DIR)) {
    fs.mkdirSync(config.UPLOAD_DIR, { recursive: true });
  }

  // Multer Storage Configuration for Image Uploads
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, config.UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const ext = path.extname(file.originalname);
      cb(null, 'product-' + uniqueSuffix + ext);
    }
  });
  const upload = multer({ storage: storage });

  // 1. GET /products -> fetch products
  router.get('/products', checkAdminAuth, async (req, res) => {
    try {
      const filter = {};
      if (req.query.visible === 'true') {
        filter.visibility = true;
      }
      const products = await Product.find(filter);
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // 2. POST /products -> add products
  router.post('/products', checkAdminAuth, async (req, res) => {
    try {
      const data = req.body;
      
      // Generate simple unique ID if not provided
      if (!data.id) {
        data.id = data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      }

      // Ensure price has rupee symbol
      if (typeof data.price === 'number' || (typeof data.price === 'string' && !data.price.startsWith('₹'))) {
        data.price = '₹' + data.price;
      }

      // Normalize bottom wear image paths if they were sent with old space name
      if (data.img && data.img.includes('Assets/Bottom Wear/')) {
        data.img = data.img.replace('Assets/Bottom Wear/', 'Assets/BottomWear/');
      }

      const product = new Product(data);
      await product.save();
      
      if (broadcastUpdate) broadcastUpdate();
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // 3. PUT /products/:id -> update products
  router.put('/products/:id', checkAdminAuth, async (req, res) => {
    try {
      const data = req.body;
      
      // Ensure price has rupee symbol
      if (data.price && (typeof data.price === 'number' || (typeof data.price === 'string' && !data.price.startsWith('₹')))) {
        data.price = '₹' + data.price;
      }

      // Normalize bottom wear image paths
      if (data.img && data.img.includes('Assets/Bottom Wear/')) {
        data.img = data.img.replace('Assets/Bottom Wear/', 'Assets/BottomWear/');
      }

      const product = await Product.findOneAndUpdate({ id: req.params.id }, data, { new: true });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      if (broadcastUpdate) broadcastUpdate();
      res.json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // 5. DELETE /products/:id -> delete products
  router.delete('/products/:id', checkAdminAuth, async (req, res) => {
    try {
      const product = await Product.findOneAndDelete({ id: req.params.id });
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      if (broadcastUpdate) broadcastUpdate();
      res.json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  // 6. POST /upload -> upload image
  router.post('/upload', checkAdminAuth, upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file uploaded' });
    }
    const filePath = 'Assets/Uploaded/' + req.file.filename;
    res.json({ filePath });
  });

  return router;
};
