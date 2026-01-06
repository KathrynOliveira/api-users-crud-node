// const { Person } = require("./person");
require("dotenv").config();

const connectToDatabase = require("./src/database/connect");

connectToDatabase();

// require('./modules/path')
// require('./modules/fs')
// require("./modules/http");
require("./modules/express");

// const person = new Person("Kathryn");
