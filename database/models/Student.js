/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "no email"
  },

  imageUrl: {
    type: Sequelize.STRING
    //defaultValue: "https://64.media.tumblr.com/4c62bf7c01d15c7655adeb8a36b9702d/e7531ecdce802bee-c9/s640x960/838eaa8ff68dc51c2b2a38a088767a9704130d58.jpg"
  },

  gpa: {
    type: Sequelize.DOUBLE,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
  
});

// Export the student model
module.exports = Student;