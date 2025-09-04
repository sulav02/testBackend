import { success, failure } from "../utils/response.js"
import Student from "../models/Student.js"

export const addStudentDetails = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        // Create a new Student document
        const student = new Student({ name, email, phone });
        // Save it to the database
        const savedStudent = await student.save();

        //const name = req.body.name
        //const age = req.body.age
        //const email = req.body.email

        // res.send(`Students details Created ${name}, ${age}`)
        // res.status(201).json({ success: true, message: `Students details Created`, data: {} })
        res.status(201).json(success(`Students details Created Successfully`, { name, email, phone }))
    } catch (error) {
        res.status(400).json(failure(error.message));
    }
}

export const getAllStudent = async (req, res) => {
    try {
        const allStudent = await Student.find()
        res.status(200).json(success("All Students Fetched Successfully", allStudent))
    } catch (error) {
        res.status(500).json(failure(error.message))
    }
}

export const getSingleStudentById = async (req, res) => {
    try {
        const { id } = req.params; // Get ID from route parameters
        const singleStudent = await Student.findById(id)

        if (!singleStudent) {
            return res.status(404).json(failure("Student not found"));
        }

        res.status(200).json(success(`Student named ${singleStudent.name} fetched successfully`, singleStudent))
    } catch (error) {
        res.status(404).json(failure(error.message))
    }

}

export const updateStudent = async (req, res) => {
    try {
        const { id } = req.params; 
        const { name, phone, email } = req.body
        const updated = await Student.findByIdAndUpdate(id, {name, phone, email}, {
            new: true,
            // runValidators: true,  // to validate updated fields
        });

        if (!updated) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student updated", data: updated });
    } catch (error) {
        res.status(500).json({ message: "Error updating student", error });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Student.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student deleted", data: deleted });
    } catch (error) {
        res.status(500).json({ message: "Error deleting student", error });
    }
};

