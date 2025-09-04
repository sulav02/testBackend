import mongoose from "mongoose";
import { Constant } from "../utils/constant";

//Product Schema
const productSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        productName: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        brand: {
            type: String,
            trim: true,
        },
        stockQuantity: {
            type: Number,
            default: 0,
            min: 0,
        },
        images: [
            {
                url: String,
                altText: String,
            },
        ],
        isActive: {
            type: Boolean,
            default: true,
        },
        ratingsAverage: {
            type: Number,
            min: 1,
            max: 5,
            default: 4.0,
        },
        ratingsQuantity: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model(Constant.PRODUCT_MODEL, productSchema);
