import { useState } from "react";
import { searchBooks } from "../services/api";

const Search = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const handleSearch = async () => {
        const response = await searchBooks(query);
        setBooks(response.data);
    };

    return (
        <div>
            <input type="text" placeholder="Search books..." onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>{book.volumeInfo.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
 