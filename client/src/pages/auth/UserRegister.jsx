import { useState } from "react";
import AuthInput from "../../components/auth/AuthInput";
import { useDispatch } from "react-redux";
import { registerUser } from "../../features/authThunks";

const UserRegister = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-3xl font-bold text-center">Create Account</h1>

        <AuthInput placeholder="Full Name" name="name" value={form.name} onChange={handleChange} />
        <AuthInput placeholder="Email" name="email" value={form.email} onChange={handleChange} />
        <AuthInput type="password" placeholder="Password" name="password" value={form.password} onChange={handleChange} />

        <button type="submit" className="w-full bg-black text-white py-3 rounded-lg font-semibold">Sign Up</button>
      </form>
    </div>
  );
};

export default UserRegister;
