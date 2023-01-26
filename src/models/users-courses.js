const db = require('../utils/database');
const { DataTypes} = require('sequelize');
const Users = require('./users.model');
const Courses = require('./courses.model');

const UsersCourses = db.define('users-courses', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: "id"
        }
    },
    course_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Courses,
            key: "id"
        }
    }
});

module.exports = UsersCourses;