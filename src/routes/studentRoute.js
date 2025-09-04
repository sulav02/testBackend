import express from "express"
import * as studentController from "../controllers/studentController.js"

const router = express.Router()

router.post("/add", studentController.addStudentDetails)
router.get("/", studentController.getAllStudent)
router.get("/:id", studentController.getSingleStudentById)
router.put("/:id", studentController.updateStudent);   
router.delete("/:id", studentController.deleteStudent); 

export default router