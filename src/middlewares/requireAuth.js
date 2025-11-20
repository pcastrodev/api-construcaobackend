const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Token não informado.' });
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Formato de token inválido.' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select('-password');

    if (!user) {
      return res.status(401).json({ message: 'Usuário não encontrado.' });
    }

    req.user = user;

    return next();
  } catch (error) {
    console.log('Erro no requireAuth:', error.message);

    return res.status(401).json({ message: 'Token inválido ou expirado.' });
  }
}

module.exports = requireAuth;
