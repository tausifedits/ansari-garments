const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  fabric: { type: String, default: '' },
  sizes: { type: [String], default: [] },
  description: { type: String, default: '' },
  type: { type: String, enum: ['top', 'bottom'], required: true },
  img: { type: String, default: '' },
  stock: { type: Number, default: 0 },
  visibility: { type: Boolean, default: true },
  showInDial: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', productSchema);
