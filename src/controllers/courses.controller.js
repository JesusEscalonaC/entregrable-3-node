const coursesServices = require('../services/courses.services');

const getAllCourses = async(req, res)=>{
    try {
        const result = await coursesServices.getAllCourses();
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getCoursesWithCategoriesAndVideos = async(req, res)=>{
    try {
        const result = await coursesServices.getWithCategoriesAndVideos();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const createNewCourse = async(req, res) =>{
    const course = req.body;
    try {
        const result = await coursesServices.create(course);
        res.status(201).json(result);
    } catch (error) {
        res.status(401).json(error.message);
    }
}
const updateCourse = async(req, res) =>{
    const {id} = req.params;
    const course = req.body;
    try {
        const result = await coursesServices.update(id, course);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
module.exports = {
    getAllCourses,
    getCoursesWithCategoriesAndVideos,
    createNewCourse,
    updateCourse
};