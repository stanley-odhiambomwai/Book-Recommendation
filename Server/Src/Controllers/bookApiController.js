import axios from "axios";

export const searchBooks = async (req, res) => {
    const { query } = req.query;

    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        res.json(response.data.items);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch books" });
    }
};
