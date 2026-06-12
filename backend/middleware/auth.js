const config = require('../config/config');

function checkAdminAuth(req, res, next) {
  // Public storefront calls are allowed
  if (req.method === 'GET' && req.path === '/products' && req.query.visible === 'true') {
    return next();
  }
  // All other database modifications or admin table reads require authorization
  const clientKey = req.headers['x-admin-key'];
  if (clientKey === config.ADMIN_ACCESS_KEY) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized: Invalid Admin Access Key' });
}

module.exports = checkAdminAuth;
