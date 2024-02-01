const mongoose = require('mongoose')

const connectDB = async () => {

    if (mongoose.connections[0].readyState) return;
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        return console.log("Connection to DB fail");
    }
}
module.exports = connectDB