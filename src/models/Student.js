
import mongoose from "mongoose";
import { Constant } from "../utils/constant.js";

const studentSchema = new mongoose.Schema({
    name: {
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
    }
    },
    {
        timestamps: true // Adds createdAt and updatedAt fields automatically
    });


export default mongoose.model(Constant.STUDENT_MODEL, studentSchema);
