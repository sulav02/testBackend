export const findColorfulBike = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "This is a very colourful bike with a good engine",
            data: {}
        });
    } catch (error) {
        console.error("Error in findColorfulBike:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};
