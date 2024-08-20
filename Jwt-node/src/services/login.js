const bcrypt = require("bcrypt");
const user = require("../models/user");
const { generateToken } = require("../utils/jwtUtils");
const { verifyToken } = require("../utils/authMiddleware");

async function login(email, password){
    try{
        const existinguser = await user.findOne({ email });
        if (!existinguser){
            throw new Error("user not found");            
        }
        const isPasswordVaild = bcrypt.compare(password, existinguser.password);
        if(!isPasswordVaild){
            throw new Error("Incorrect password");
        }
        const token = generateToken(existinguser);
        return token;
    }catch (error){
        console.log("Login error:", error.message);
        throw new Error("Invalid credentials")
    } 
}

async function refreshToken(oldToken){
    try{
        const decodedToken = verifyToken(oldToken);
        const user = user.findById(decodedToken._id);
        if(!user){
            throw new error("User not found");
        };
        const newToken = generateToken(user);
        return newToken;
    }catch(error){
        throw new error("Invalid token");
    }
}
   

module.exports = {
    login,
    refreshToken
}