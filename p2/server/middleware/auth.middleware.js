const jwt = require('jsonwebtoken');

module.exports.jwtProtectedRoute = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No Token Provided: Authorization Denied', success: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_STAMP /*config.get('JWT_STAMP')*/);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Invalid Token Authorization Denied', success: false });
  }
};