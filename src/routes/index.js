const { Router } = require('express');
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');

const router = Router();

router.use('/auth', authRoutes);

router.use('/product', productRoutes);

module.exports = router;
