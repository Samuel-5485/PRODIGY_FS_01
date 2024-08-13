const User = reqiure("../models/User");
const bcrypt =  require("bcrypt");

async function createUser(userData){
    const { name, email, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
        name,
        email,
        hachedPassword,
        role: "customer"
    });
    const saveduser = await createUser.save();
    return savedUser
}

module.exports = { createUser }