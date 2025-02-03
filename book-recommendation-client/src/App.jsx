import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/login";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Search />} />
                <Route path="/books" element={<BookDetails />} />
            </Routes>
        </Router>
    );
}

export default App;

