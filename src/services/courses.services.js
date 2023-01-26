const Courses = require('../models/courses.model');
const Categories = require('../models/categories.model');
const Videos = require('../models/videos.models');

class coursesServices {
    static async getAllCourses (){
        try {
            const result = await Courses.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
            });
            return result
        } catch (error) {
            throw error;
        }
    }
    static async getWithCategoriesAndVideos(){
        try {
            const result = await Courses.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                },
                include: [
                    {
                        model: Categories,
                        as: "categories",
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                    },
                    {
                        model: Videos,
                        as: "videos",
                        attributes: {
                            exclude: ["createdAt", "updatedAt"]
                        },
                    }
                ]
            });
            return result;
        } catch (error) {
            throw error;
        }   
    }
    static async create(course){
        try {
            const result = await Courses.create(course);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async update(id, course){
        const updateCourse = {};

        course.description && (updateCourse.description = course.description)
        try {
            const result = await Courses.update({where: {id}})
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = coursesServices;