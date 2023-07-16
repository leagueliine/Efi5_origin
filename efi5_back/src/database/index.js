const Sequelize = require('sequelize');
const configDb = require('../config/database');
const { config } = require('../../../.sequelizerc');

const User = require('../models/user')

const connection = new Sequelize(configDb)

User.init(connection)

module.exports = connection;