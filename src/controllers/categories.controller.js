const categoriesServices = require('../services/categories.services');

const createCategory = async(req, res)=>{
    const body = req.body;
    const {course_id} = req.params
    try {
        body.course_id = course_id;

        const result = await categoriesServices.create(body);
        res.status(201).json(result);
    } catch (error) {
        res.status(401).json(error.message);
    }
}

const deleteCategory = async(req, res)=>{
    const {category_id} = req.params;
    try {
        const result = await categoriesServices.delete(category_id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    createCategory,
    deleteCategory
}
