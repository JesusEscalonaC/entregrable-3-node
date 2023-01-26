const { DataTypes } = require('sequelize');
const db = require('../utils/database');
const Courses = require('./courses.model');

const Categories = db.define('categories', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
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

module.exports = Categories;