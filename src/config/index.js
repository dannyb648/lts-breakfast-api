require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || "development";

console.log(process.env.PORT);

module.exports = {

  port: process.env.PORT, 

};
