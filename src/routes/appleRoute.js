import express  from  "express"
import * as appleController from "../controllers/appleController.js"

const router = express.Router()

router.get("/get", appleController.getAllApple)

router.post("/add", appleController.addApple)
export default router