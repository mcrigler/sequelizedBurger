// Require dependencies
var Sequelize = require('sequelize');
var connection = require('../config/connection.js');

// Table variable
var Burgers = connection.define('sqburgers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: "Please enter a burger name then click the submit button."
      }
    }
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: false
});

// sync the table 
Burgers.sync();


// All, Create, and Update functions 
var burger = {
  all: function(cb) {
    Burgers.findAll({}).then(function(response) {
      cb(response);
    });
  },
  

  create: function(burger_name, cb) {
    Burgers.create({
      burger_name: burger_name
    }).then(function() {
      cb();
    }).catch(function(error) {
      cb(error);
    });
  },
  

  update: function(id, cb) {
    Burgers.update({
      devoured: true
    }, {
      where: {id: id}
    }).then(function() {
      cb();
    });
  }
};

// Export
module.exports = burger;