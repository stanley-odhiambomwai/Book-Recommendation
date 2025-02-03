import Book from "../Config/Models/Book";

export const getPersonalizedRecommendations = async (req, res) => {
    try {
        const user = req.user;
        const likedGenres = user.likedGenres || [];

        const recommendations = await Book.find({ genre: { $in: likedGenres } }).limit(10);
        res.json(recommendations);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch recommendations" });
    }
};
