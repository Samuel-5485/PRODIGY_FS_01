const mongoose = require(`../configuration/DBConfig`);

const userShema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{type:String, enum:["admin", "customer"], default: "customer"}
});

module.export = mongoose.model("user", userShema);