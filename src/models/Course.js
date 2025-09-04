import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 5
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model("Course", courseSchema)