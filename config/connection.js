// Require dependencies
var Sequelize = require('sequelize');


// Set the environment to the JawsDB 
var env;
if (process.env.JAWSDB_URL)
    env = "production";
else {
    env = 'development';
}


// Set connection (sequelize) 
var config = require('./config')[env];
var sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, {
		host: config.host,
		dialect: config.dialect
	});
}

// Export connection
module.exports = sequelize;