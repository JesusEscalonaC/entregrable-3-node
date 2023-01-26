const {Router} = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

const {
    createCategory,
    deleteCategory
} = require('../controllers/categories.controller');


router.post('/categories/:course_id', authMiddleware, createCategory);
router.delete('/categories/:category_id', authMiddleware, deleteCategory);

module.exports = router;