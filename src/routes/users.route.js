const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const {
    getUserById,
    getUserWithCourse,
    createUser,
    updateUser,
    addCourse
} = require('../controllers/users.controller')

const router = Router();

router.get('/users/:id', getUserById);

router.get('/users/:id/courses', authMiddleware,  getUserWithCourse);

router.post('/users', createUser );
 
router.put('/users/:id', authMiddleware, updateUser);

router.post('/users/:id/courses/:courseId', authMiddleware, addCourse);

module.exports = router;



