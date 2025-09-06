import { response } from "express";
import Teacher from "../models/Teacher.js";
import { failure, success } from "../utils/response.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

// CRUD
export const addTeacher = asyncHandler(async (req, res) => {
    const { name, email, phone } = req.body
    const newTeacher = new Teacher({ name, email, phone })
    const savedTeacher = await newTeacher.save()
    res.status(201).json(success(`This ${savedTeacher.name} subject is added successfully`, savedTeacher))
})

//? Bad syntax way
// export const addTeacher = async (req, res) => {
//     try {
//         const { name, email, phone } = req.body
//         const newTeacher = new Teacher({ name, email, phone })
//         const savedTeacher = await newTeacher.save()
//         res.status(201).json(success(`This ${savedTeacher.name} subject is added successfully`, savedTeacher))
//     } catch (error) {
//         res.status(500).json(failure(error.message))
//     }
// }

export const getAllTeacher = asyncHandler(async (req, res) => {
    const allTeacher = await Teacher.find()
    res.status(200).json(success("Teacher Details fetched Successfully", allTeacher))
})

export const getSingleTeacherById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    // const singleTeacherById = await Teacher.findOne({_id:id}) or
    const singleTeacher = await Teacher.findById(id);
    res.status(200).json(success(`Teacher Detail ${singleTeacher.name} fetched Successfully`, singleTeacher))
})


export const updateTeacher = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, { name, email, phone }, {
        new: true,
        // runValidators: true,  // to validate updated fields
    });

    if (!updatedTeacher) {
        return failure(404, "Teacher not found")
    }

    res.status(200).json(success("Teacher updated", updatedTeacher));
});

export const deleteTeacher = asyncHandler(async (req, res) => {

    const { id } = req.params;
    const deletedTeacher = await Teacher.findByIdAndDelete(id);

    if (!deletedTeacher) {
        return failure(404, "Teacher not found")
    }

    res.status(200).json({ message: "Teacher deleted" });

});


