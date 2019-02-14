const knex = require("knex");
require("dotenv").config();

const db = process.env.DB_ENV || "development";
console.log(`Using the ${db} process.`);
const config = require("../knexfile.js")[db];

module.exports = knex(config);
