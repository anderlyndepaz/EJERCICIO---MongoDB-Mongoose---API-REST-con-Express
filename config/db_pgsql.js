/* require('dotenv').config();
console.log("******************");
console.log(process.env.DB_USER); // remove this
console.log(process.env.DB_HOST); */

const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({ 
    user: process.env.DB_USER, 
    host: process.env.DB_HOST, 
    database: process.env.DB_DATABASE, 
    password: process.env.DB_PASSWORD 
})
module.exports = pool;