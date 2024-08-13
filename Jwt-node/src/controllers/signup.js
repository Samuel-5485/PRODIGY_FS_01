const userService = require("../services");

async function createUser(req, res){
    try{
        const userData = req.body;
        const user = await userService.createUser(userData);
        req.staus(201).json({ user: user, message: "user created successfuly"});
    } catch (error){
        console.log(error);
            res.staus(400).json({ message: error.message});
        }
    }

    module.export = {createUser};