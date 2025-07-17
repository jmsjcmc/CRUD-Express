const { default: mongoose, model } = require("mongoose");

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_url);
        console.log("Connected");
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = ConnectDB;