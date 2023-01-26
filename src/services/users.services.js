const Users = require('../models/users.model');
const Courses = require('../models/courses.model');
const UserCourses = require('../models/users-courses');
const UsersCourses = require('../models/users-courses');
class userServices {
    static async getById(id){
        try {
            const result = await Users.findByPk(id, {
                attributes:{
                    exclude: [
                        "password", "createdAt", "updatedAt"
                    ]
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async getWithCourses(id){
        try {
            const result = await Users.findOne({
                where: {id},
                attributes:{
                    exclude: [
                        "password", "createdAt", "updatedAt"
                    ]
                },
                include: {
                    model: UserCourses,
                    as: "courses",
                    attributes:[
                        "id"
                    ],
                    include:{
                        model: Courses,
                        as: "course",
                        attributes:{
                            exclude: [
                                 "createdAt", "updatedAt"
                            ]
                        },
                    }
                }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async create(user){
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;
        }
    }
    static async update(id, field){
       try {
            const result = await Users.update(field, {
            where: {id},
            
        })
        return result;
       } catch (error) {
        throw error;
       }
    }
    static async addCourse(user_id, course_id){
        try {
            const body = {user_id, course_id};
            const result = await UsersCourses.create(body);
            return result;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userServices;