import { useState } from "react";
import AuthInput from "../../components/auth/AuthInput";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/authThunks";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(form));
    if (result.meta.requestStatus === "fulfilled") navigate("/"); // login success
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center">User Login</h1>
        <AuthInput placeholder="Email" name="email" value={form.email} onChange={handleChange} />
        <AuthInput type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />
        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
