



import { useState } from "react";
import api from "../../api/axios";
import { Link } from "react-router-dom";

export default function UserRegister() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await api.post("/auth/user/register", { fullName, email, password });
      alert("Registered successfully");
      window.location.href = "/user/login";
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 p-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20">

        {/* Icon */}
        <div className="text-center text-5xl mb-4">📝</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
        User Create Account
        </h2>

        {/* Form Inputs */}
        <div className="flex flex-col gap-4">
          <input
            placeholder="Full Name"
            onChange={e => setFullName(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60
            outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60
            outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
            className="w-full px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60
            outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <button
            onClick={handleRegister}
            className="w-full py-3 rounded-xl font-semibold text-lg text-white
            bg-gradient-to-r from-purple-500 to-pink-500
            hover:scale-105 hover:shadow-xl
            transition duration-300"
          >
            Register
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            Already have an account?
          </p>
          <Link 
            to="/user/login" 
            className="mt-2 inline-block text-indigo-400 font-bold hover:underline"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}
