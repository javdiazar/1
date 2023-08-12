require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const Products = require("./src/models/Products");
const Users = require("./src/models/Users");

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
);

Products(database);
Users(database);
//'postgres://user:pass@example.com:5432/dbname'

module.exports = { database, ...database.models };
