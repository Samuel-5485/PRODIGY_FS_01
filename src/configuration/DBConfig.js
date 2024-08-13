const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Oauth_DB");

mongoose.connection.on("connected", () => {
    console.log("connected to MOngoDB")
});
mongoose.connection.on("error", (err)=> {
    console.log(`mongoDB connection error: ${err}`)
})

module.export = mongoose; 