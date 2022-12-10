/*==================================================
/database/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      nonEmpty:true,
    },
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "no address",
    validate: {
      notEmpty: true,
  },
},

  description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "Campus description",
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  }
});

// Export the campus model
module.exports = Campus;