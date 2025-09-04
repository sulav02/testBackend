export const getAllApple = async (req, res) => {
    try {
        res.status(200).json({ success: true, message: "This is a very good apple", data: {} });
    } catch (error) {
        console.error("Error in getAllApple:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export const addApple = async (req, res) => {
    try {
        res.status(201).json({ success: true, message: "Apple is successfully added", data: {} });
    } catch (error) {
        console.error("Error in addApple:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
