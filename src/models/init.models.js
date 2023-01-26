const Categories = require('./categories.model');
const Users = require('./users.model');
const Videos = require('./videos.models');
const UsersCourses = require('./users-courses');
const Courses = require('./courses.model');

const initModels = () =>{
Users.hasMany(UsersCourses, {as: 'courses', foreignKey: 'user_id'}),
UsersCourses.belongsTo(Users, {as: 'instructor', foreignKey: 'user_id'}),

Courses.hasMany(UsersCourses, {as: 'author', foreignKey: 'course_id'}),
UsersCourses.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'}),

Courses.hasMany(Categories, {as: 'categories', foreignKey: 'course_id'}),
Categories.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'}),

Courses.hasMany(Videos, {as: 'videos', foreignKey: 'course_id'}),
Videos.belongsTo(Courses, {as: 'course', foreignKey: 'course_id'});
};

module.exports = initModels;