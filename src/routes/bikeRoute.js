
import express from 'express'
import * as bikeController  from '../controllers/bikeController.js'

const router = express.Router()
router.get("/get", bikeController.findColorfulBike)
export default router
