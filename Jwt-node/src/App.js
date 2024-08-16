const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser =  require("body-parser");
const mongoose = require("./configuration/DBConfig")
const cors = require("cors");

const App = express();
const PORT = process.env.PORT || 3000;
App.use(cors());
App.use(bodyParser.json());

App.use("/user", signupRoute);

App.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});
module.exports = App;