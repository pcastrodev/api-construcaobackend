const { Router } = require('express');
const controller = require('../controllers/productController');
const requireAuth = require('../middlewares/requireAuth');

const router = Router();

router.post('/', requireAuth, controller.create);
router.put('/:id', requireAuth, controller.update);
router.delete('/:id', requireAuth, controller.remove);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);

module.exports = router;
