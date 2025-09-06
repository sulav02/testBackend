import mongoose from "mongoose";
import { Constant } from "../utils/constant.js";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,   // Usually email is unique
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: [3, "Minimum 3 character required"]
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    profilePicUrl:String,
    refreshToken: {
        type:String,
        select:false
    }
    // Adds createdAt and updatedAt fields automatically
}, { timestamps: true });


export default mongoose.model(Constant.USER_MODEL, userSchema);
