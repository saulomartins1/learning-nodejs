// require("./modules/path")
// require("./modules/fs")
// require("./modules/http")
// require("./modules/express");
const dotenv = require("dotenv")
const connectDB = require("./database/connectDB")

dotenv.config();

connectDB();