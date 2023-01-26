const { Router } = require('express');
const authMiddleware = require('../middlewares/auth.middleware');

const router = Router();
const {
    createVideo, 
    deleteVideo
} = require('../controllers/videos.controller');

router.post('/videos/', authMiddleware, createVideo);

router.delete('/videos/:id', authMiddleware, deleteVideo);

module.exports = router;

