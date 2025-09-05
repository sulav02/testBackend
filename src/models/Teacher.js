import mongoose from "mongoose";
import { Constant } from "../utils/constant.js";
const teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }

}, { timestamps: true })

export default mongoose.model(Constant.TEACHER_MODEL, teacherSchema)