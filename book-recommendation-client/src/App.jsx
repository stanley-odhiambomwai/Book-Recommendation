import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/login";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";

function App() {
    return (
      <>
        <Router>
            
                <aside className="w-60 h-screen bg-gray-900 text-white p-4">
                    <h1 className="text-xl font-bold">📖 BookApp</h1>
                    <nav className="mt-6">
                        <Link to="/Search" className="block py-2">🔍 Search Books</Link>
                        <Link to="/recommendations" className="block py-2">✨ Recommendations</Link>
                        <Link to="/login" className="block py-2">🔑 Login</Link>
                        <Link to="/Register" className="block py-2">📝 Register</Link>
                    </nav>
                </aside>

                <div className="flex-1 p-6"></div>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="/books" element={<BookDetails />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;

