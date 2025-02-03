import { useEffect, useState } from "react";
import { getAllBooks } from "../services/api";

const BookDetails = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await getAllBooks();
            setBooks(response.data);
        };
        fetchBooks();
    }, []);

    return (
        <div>
            <h1>Book Recommendations</h1>
            {books.map((book) => (
                <div key={book._id}>
                    <h3>{book.title}</h3>
                    <p>{book.author}</p>
                    <p>{book.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BookDetails;
