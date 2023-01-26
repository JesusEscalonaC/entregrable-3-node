const videosServices = require('../services/videos.services');

const createVideo = async(req, res)=>{
    const video = req.body;
    const {course_Id} = req.params;
    try {
        video.course_Id = course_Id;
        const result = await videosServices.create(video);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}
const deleteVideo = async(req, res)=>{
    const {id} = req.params;
    
    try {
        const result = await videosServices.delete(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
module.exports = {
    createVideo,
    deleteVideo
}