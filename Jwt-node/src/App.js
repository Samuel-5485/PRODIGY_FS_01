const express = require("express");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login");
const userRoute = require("./routes/user")
const bodyParser =  require("body-parser");
const mongoose = require("./configuration/DBConfig")
const cors = require("cors");
const createAdminAccount = require("./scripts/admin");
const { refreshToken } = require("./services/login");
const App = express();

const PORT = process.env.PORT || 3000;


App.use(cors());
App.use(bodyParser.json());

createAdminAccount();

App.use("/user", signupRoute);
App.use("/auth", loginRoute);
App.use("/api", userRoute);


App.listen(PORT, ()=>{
    console.log(`server is running on: http://localhost:${PORT}`);
});
module.exports = App;