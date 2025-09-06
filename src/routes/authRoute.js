import * as authController from "../controllers/authController.js"
import express from "express"

const router = express.Router()

router.post("/register",authController.register)
router.post("/login",authController.login)
router.post("/refreshToken",authController.getNewAccessToken)

export default router
