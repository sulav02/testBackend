import express from "express"

const app = express()

// middleware config
app.use(express.json())

// Route  Import
import appleRoute from "./routes/appleRoute.js"
import bikeRoute from "./routes/bikeRoute.js"
import cowRoute from "./routes/cowRoute.js"
import studentRoute from "./routes/studentRoute.js"
import courseRoute from "./routes/courseRoute.js"
import helicopterRoute from "./routes/helicopterRoute.js"
import teacherRoute from "./routes/teacherRoute.js"
import authRoute from "./routes/authRoute.js"


// Route Use
app.use("/apple", appleRoute)
app.use("/bike", bikeRoute)
app.use("/cow", cowRoute)
app.use("/student", studentRoute)
app.use("/helicopter", helicopterRoute)
app.use("/course", courseRoute)
app.use("/teacher", teacherRoute)
app.use("/auth", authRoute)

app.get("/", async (req, res) => {
    res.send("Welcome to Test Api")
})


// Custom  middleware like errorHandler
import { errorHandler } from "./middlewares/errorHandler.js"
app.use(errorHandler)


export default app;

