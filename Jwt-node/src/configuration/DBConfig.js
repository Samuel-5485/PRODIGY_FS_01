const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MyDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //bufferCommands:false,
    serverSelectionTimeoutMS:50000,
    
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB")
});

mongoose.connection.on("error", (err) => {
    console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose; 