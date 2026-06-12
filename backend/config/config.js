const path = require('path');

// Load .env file if running in non-production environment
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../.env') });
}

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ansari_garments',
  ADMIN_ACCESS_KEY: process.env.ADMIN_ACCESS_KEY || 'AnsariAdmin2026',
 DB_DATA_PATH: path.join(__dirname, '../../database/db-data'),
  PUBLIC_DIR: path.join(__dirname, '../../Frontend'),
  UPLOAD_DIR: path.join(__dirname, '../../Frontend/Assets/Uploaded')
};
