const jwt = require('jsonwebtoken');


function authMiddleware(req, res, next) {
  const token = req.body.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Token not provided' });
  }

  jwt.verify(token, 'my_secret_key_2023$#@!', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = decoded
    next();
  });

};

module.exports = authMiddleware;
