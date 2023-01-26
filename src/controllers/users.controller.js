const userServices = require('../services/users.services');

const getUserById = async (req, res) =>{
    try {
     const { id } = req.params;
     const result = await userServices.getById(id);
     res.status(200).json(result)
    } catch (error) {
     res.status(400).json(error.message)
    }
 };
 const getUserWithCourse = async (req, res) =>{
    try {
        const {id} = req.params;
        const result = await userServices.getWithCourses(id);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
 }
 const createUser = async (req, res) =>{
    try {
        const newUser = req.body;
        const result = await userServices.create(newUser);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
 }
 const updateUser = async (req, res) =>{
    try {
        const {id} = req.params;
        const body = req.body;
        const field = {};
        body.password && (field.password=body.password);
        body.firstname && (field.firstname=body.firstname);
        body.lastname && (field.lastname=body.lastname);
        if(!field== {}){
            const result = await userServices.update(id, field);
            res.status(200).json(result);
        }else{
            res.status(400).json({message: "algo salió mal"})
        }
       
     } catch (error) {
        res.status(400).json(error.message);
    }  
};
 const addCourse = async (req, res) =>{
    try {
        const {id, courseId} = req.params;

        const result = await userServices.addCourse(id, courseId);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
 }

module.exports = {
    getUserById,
    getUserWithCourse,
    createUser,
    updateUser,
    addCourse
}