require("dotenv").config()
const config = {
  connectionLimit: 5,
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
};

module.exports = database;