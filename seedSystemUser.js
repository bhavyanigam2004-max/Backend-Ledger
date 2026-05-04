require("dotenv").config();
const mongoose = require("mongoose");
const connectToDB = require("./src/config/db");
const userModel = require("./src/models/user.model");

async function seedSystemUser() {
    await connectToDB();
    
    await userModel.deleteOne({ email: "system@test.com" });
    
    await userModel.create({
        email: "system@test.com",
        name: "SYSTEM",
        password: "system123456",
        systemUser: true
    });
    
    console.log("System user created!");
    process.exit(0);
}

seedSystemUser();