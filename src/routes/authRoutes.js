const { Router } = require('express');
const { register, login } = require('../controllers/authController');
const requireAuth = require('../middlewares/requireAuth');

const router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/me', requireAuth, (req, res) => {
  return res.status(200).json({ user: req.user });
});

module.exports = router;
