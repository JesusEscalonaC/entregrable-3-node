const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const {
    getAllCourses,
    getCoursesWithCategoriesAndVideos,
    createNewCourse,
    updateCourse
} = require('../controllers/courses.controller');
const router = Router();

router.get('/courses', getAllCourses);

router.get('/courses/videocategories', getCoursesWithCategoriesAndVideos);

router.post('/courses', authMiddleware, createNewCourse);

router.put('/courses/:id', authMiddleware, updateCourse);

module.exports= router;


