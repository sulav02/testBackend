import mongoose from "mongoose";
import { Constant } from "../utils/constant.js";

export const startDBConnection = async () => {
    const connection = await mongoose.connect(`${Constant.MONGO_URL}/${Constant.DB_NAME}`)
    return connection;
}
