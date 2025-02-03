import { useState } from "react";
import { loginUser } from "../services/api";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await loginUser(formData);
        localStorage.setItem("token", response.data.token);
        alert("Logged in successfully!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
