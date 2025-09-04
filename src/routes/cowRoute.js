import express from 'express'
import * as cowController from '../controllers/cowController.js'

const router = express.Router()

router.get("/:color", cowController.whichCowColor)
export default router