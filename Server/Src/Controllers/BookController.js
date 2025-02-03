import Book from "../Config/Models/Book.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("user", "name");
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const addBook = async (req, res) => {
    const { title, author, description, rating } = req.body;
    try {
        const newBook = new Book({ title, author, description, rating, user: req.user.id });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

