import app from "./app.js"
import { startDBConnection } from "./config/db.js";
import { Constant } from "./utils/constant.js";

const port = Constant.PORT

try {
    const connection = await startDBConnection()
    if (connection) {
        app.listen(port, () => {
            console.log(`🚀 Server running on localhost:${port}`);
        })
    } else {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1);
    }
} catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
}

