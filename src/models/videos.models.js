const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Courses = require('./courses.model');

const Videos = db.define('videos', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        // validate: {isUrl: true} 
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

module.exports = Videos; 