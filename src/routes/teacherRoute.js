import express from 'express'
import * as teacherController from "../controllers/teacherController.js"

const router = express.Router()
router.post("/", teacherController.addTeacher)
router.get("/", teacherController.getAllTeacher)
router.get("/:id", teacherController.getSingleTeacherById)
router.patch("/:id", teacherController.updateTeacher)
router.delete("/:id", teacherController.deleteTeacher)

export default router;