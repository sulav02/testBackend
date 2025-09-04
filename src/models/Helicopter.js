import mongoose from "mongoose";

const helicopterSchema = new mongoose.Schema(
    {
        model: {
            type: String,
            required: true,
            unique: true,   // unique helicopter model
            trim: true, // del space from start point and end point if user adds mistakenly
        },
        manufacturer: {
            type: String,
            required: true,
            trim: true,
        },
        capacity: {
            type: Number,   // number of passengers
            required: true,
            min: 1,
        },
        maxSpeed: {
            type: Number,   // in km/h or mph
            required: false,
            min: 0,
        },
        range: {
            type: Number,   // max flight range in km or miles
            required: false,
            min: 0,
        },
        color: {
            type: String,
            trim: true,
        }
    },
    {
        timestamps: true, // adds createdAt and updatedAt automatically
    }
);

export default mongoose.model("Helicopter", helicopterSchema);
