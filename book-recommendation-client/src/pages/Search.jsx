import { useState, useEffect } from "react";
import { searchBooks } from "../services/api";

const inspirationalQuotes = [
    "A reader lives a thousand lives before he dies. – George R.R. Martin",
    "So many books, so little time. – Frank Zappa",
    "Reading is essential for those who seek to rise above the ordinary. – Jim Rohn",
    "Books are uniquely portable magic. – Stephen King",
    "The only thing you absolutely have to know is the location of the library. – Albert Einstein",
];

const Search = () => {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [featuredBook, setFeaturedBook] = useState(null);
    const [quote, setQuote] = useState("");

    useEffect(() => {
        setQuote(inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]);
    }, []);

    const handleSearch = async () => {
        if (!query.trim()) return;
        const response = await searchBooks(query);
        setBooks(response.data);

        // Set a random featured book
        if (response.data.length > 0) {
            setFeaturedBook(response.data[Math.floor(Math.random() * response.data.length)]);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-4 animate-fadeIn">
                Discover Your Next Favorite Book 📚
            </h1>
            <p className="text-center text-gray-600 italic mb-6">{quote}</p>

            <div className="flex gap-2">
                <input
                    type="text"
                    className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Search books by title, author, or genre..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            {featuredBook && (
                <div className="mt-8 p-6 bg-yellow-100 rounded-lg shadow-lg animate-slideIn">
                    <h2 className="text-2xl font-semibold text-center">📖 Featured Book of the Day</h2>
                    <div className="flex flex-col items-center">
                        <img
                            src={featuredBook.image}
                            alt={featuredBook.title}
                            className="w-32 h-40 my-4 rounded-lg shadow-md"
                        />
                        <h3 className="text-lg font-bold">{featuredBook.title}</h3>
                        <p className="text-sm text-gray-600">{featuredBook.authors.join(", ")}</p>
                        <p className="text-yellow-500">⭐ {featuredBook.rating}</p>
                    </div>
                </div>
            )}

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="p-4 border rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                    >
                        <img
                            src={book.image}
                            alt={book.title}
                            className="w-32 h-40 mx-auto rounded-lg"
                        />
                        <h2 className="text-lg font-semibold mt-2 text-center">{book.title}</h2>
                        <p className="text-sm text-gray-600 text-center">{book.authors.join(", ")}</p>
                        <p className="text-yellow-500 text-center">⭐ {book.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;

 