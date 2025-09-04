import express from "express"
import * as courseController from "../controllers/courseController.js"

const router = express.Router()

router.post("/", courseController.addCourse)
router.get("/", courseController.getAllCourse)
router.get("/:id", courseController.getSingleCourseById)
router.put("/:id", courseController.updateCourse);   
router.delete("/:id", courseController.deleteCourse); 

export default router