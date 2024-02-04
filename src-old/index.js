// require("./modules/path")
// require("./modules/fs")
// require("./modules/http")
const dotenv = require("dotenv")
const connectDB = require("./database/connectDB")

dotenv.config();
connectDB();

require("./modules/express")

