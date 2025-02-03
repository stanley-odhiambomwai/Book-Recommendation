import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const searchBooks = (query) => API.get(`/books/search?query=${query}`);
export const registerUser = (userData) => API.post("/users/register", userData);
export const loginUser = (userData) => API.post("/users/login", userData);
export const getAllBooks = () => API.get("/books");
export const addBook = (bookData, token) => API.post("/books/add", bookData, { headers: { Authorization: token } });
