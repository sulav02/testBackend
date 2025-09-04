import { success } from "../utils/response.js";

export const whichCowColor = async (req, res) => {

    try {
        const { color } = req.params;
        res.status(200).json({ success: true, message: `These cows are in ${color} color.`, data: {} })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, data: {} })
    }

}