import * as helicopterController from "../controllers/helicopterController.js"
import express from "express"
const router = express.Router()

router.post("/add", helicopterController.addHelicopter)
router.get("/get", helicopterController.getAllHelicopter)
router.get("/get/:model", helicopterController.getSingleHelicopterByModel)
router.delete("/delete/:model", helicopterController.deleteSingleHelicopterByModel)
export default router;