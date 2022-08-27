/**
 * Created by Vadym Yatsyuk on 06.08.18
 */
const fs = require('fs');
const path = require('path');

// import .env variables
if (fs.existsSync(path.join(__dirname, "../.env"))) {
  require('dotenv-safe').config({
    path: path.join(__dirname, '../.env'),
    sample: path.join(__dirname, '../.env.example'),
  });
}

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev",
    };