import { response } from "express";
import Teacher from "../models/Teacher.js";
import { failure, success } from "../utils/response.js";

// CRUD

export const addTeacher = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const newTeacher = new Teacher({ name, email, phone })
        const savedTeacher = await newTeacher.save()
        res.status(201).json(success(`This ${savedTeacher.name} subject is added successfully`, savedTeacher))
    } catch (error) {
        res.status(500).json(failure(error.message))
    }
}
export const getAllTeacher = async (req, res) => {
    try {
        const allTeacher = await Teacher.find()
        res.status(200).json(success("Teacher Details fetched Successfully", allTeacher))
    } catch (error) {
        res.status(500).json(failure(error.message))
    }

}

export const getSingleTeacherById = async (req, res) => {
    try {
        const {id} = req.params;
        // const singleTeacherById = await Teacher.findOne({_id:id}) or
        const singleTeacher = await Teacher.findById(id);
        res.status(200).json(success(`Teacher Detail ${singleTeacher.name} fetched Successfully`, singleTeacher))
    } catch (error) {
        res.status(500).json(failure(error.message))
        
    }
    
}


export const updateTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone } = req.body
        const updatedTeacher = await Teacher.findByIdAndUpdate(id, { name, email, phone }, {
            new: true,
            // runValidators: true,  // to validate updated fields
        });

        if (!updatedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        res.status(200).json({ message: "Teacher updated", data: updatedTeacher });
    } catch (error) {
        res.status(500).json({ message: "Error updating Teacher details", error });
    }
};

export const deleteTeacher = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTeacher = await Teacher.findByIdAndDelete(id);

        if (!deletedTeacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        res.status(200).json({ message: "Teacher deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Teacher", error });
    }
};


