import { useEffect, useState } from "react";
import { getRecommendations } from "../services/api";

const Recommendations = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchRecommendations = async () => {
            const response = await getRecommendations();
            setBooks(response.data);
        };
        fetchRecommendations();
    }, []);

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Recommended For You 📚</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {books.map((book) => (
                    <div key={book.id} className="p-4 border rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold">{book.title}</h2>
                        <p className="text-sm text-gray-600">{book.author}</p>
                        <p className="text-yellow-500">⭐ {book.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recommendations;
