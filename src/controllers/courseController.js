import { response } from "express";
import Course from "../models/Course.js";
import { failure, success } from "../utils/response.js";

// addCourse, getAllCourse, updateCourse, deleteCourse

export const addCourse = async (req, res) => {

    try {
        const { title, isbn, price, author } = req.body;
        const newCourse = new Course({ title, isbn, price, author })
        const savedCourse = await newCourse.save()
        res.status(201).json(success(`This ${savedCourse.title} subject is added successfully`, savedCourse))
    } catch (error) {
        res.status(500).json(failure(error.message))
    }
}
export const getAllCourse = async (req, res) => {
    try {
        const allCourse = await Course.find()
        // Check if array is empty
        if(allCourse.length ===0){
            return res.status(404).json(failure("No courses found, please add some courses first"));  
        }
        res.status(200).json(success("All Courses Fetched Successfully", allCourse))
    } catch (error) {
        res.status(500).json(failure(error.message))

    }
}


export const getSingleCourseById = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from route parameters
        const singleCourse = await Course.findById(id)

        if (!singleCourse) {
            return res.status(404).json(failure("Course not found"));
        }

        res.status(200).json(success(`Course named ${singleCourse.title} fetched successfully`, singleCourse))
    } catch (error) {
        res.status(500).json(failure(error.message))
    }

}

export const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, isbn, price } = req.body
        const updated = await Course.findByIdAndUpdate(id, { title, author, isbn, price }, {
            new: true,
            // runValidators: true,  // to validate updated fields
        });

        if (!updated) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ message: "Course updated", data: updated });
    } catch (error) {
        res.status(500).json({ message: "Error updating Course details", error });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Course.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json({ message: "Course deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting Course", error });
    }
};


