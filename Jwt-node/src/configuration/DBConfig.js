const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Oauth_DB",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    bufferCommands:false,
    serverSelectionTimeoutMS:50000,
    
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
});

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose; 