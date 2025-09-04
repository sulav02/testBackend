import { success, failure } from "../utils/response.js"

export const addHelicopter = async (req, res) => {

    try {
        const { color, model } = req.body
       // res.status(201).json({ success: true, message: `${color} Helicopter ${model} is added successfully`, data: { color, model } })
        res.status(201).json(success(`${color} Helicopter ${model} is added successfully`, {color, model}))
    } catch (error) {
        //dry - // res.status(500).json({ success: false, message: error.message, data: {} })
        res.status(500).json(failure(error.message))
    }

}

export const getAllHelicopter = async (req, res) => {
    // Example in-memory array of helicopters
    const helicopters = [
        { model: "HEL01", color: "White" },
        { model: "HEL02", color: "Black" },
        { model: "HEL03", color: "Blue" },
    ];

    try {
        res.status(200).json({ success: true, message: " All Helicopters fetched successfully", data: helicopters })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, data: {} })
    }
}

export const getSingleHelicopterByModel = async (req, res) => {
    try {
        const { model } = req.params
        res.status(200).json({ success: true, message: `Model ${model} helicopter fetched successfully`, data: { model } })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, data: {} })
    }
}

export const deleteSingleHelicopterByModel = async (req, res) => {
    try {
        const {model} = req.params
        res.status(200).json({success: true, message:`Helicopter model number ${model} is deleted successfully.`, data: {model}})
    } catch (error) {
        
        res.status(500).json({success:false, message:error.message, data:{}})
    }
    
}
