





import { useState } from "react";
import api from "../../api/axios";
import { Link } from "react-router-dom";

export default function PartnerRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await api.post("/auth/food-partner/register", {
        name,
        email,
        password,
      });

      alert("Food Partner registered");
      window.location.href = "/partner/login";
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 p-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/30">

        {/* Icon */}
        <div className="text-center text-5xl mb-3">🏪</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          Food Partner Register
        </h2>

        {/* Name */}
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-5 py-3 rounded-xl bg-white/30 text-white placeholder-white/60
          outline-none focus:ring-2 focus:ring-white transition"
        />

        {/* Email */}
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-5 py-3 rounded-xl bg-white/30 text-white placeholder-white/60
          outline-none focus:ring-2 focus:ring-white transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-5 py-3 rounded-xl bg-white/30 text-white placeholder-white/60
          outline-none focus:ring-2 focus:ring-white transition"
        />

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full py-3 rounded-xl font-semibold text-lg text-white
          bg-gradient-to-r from-yellow-400 to-orange-500
          hover:scale-105 hover:shadow-xl
          transition duration-300"
        >
           Register as foodPartner
        </button>

        {/* Footer */}
      <div className="text-center mt-6">
  <p className="text-white/70 text-sm">
    Join as a verified food partner
  </p>
  <Link 
    to="/partner/login" 
    className="mt-2 inline-block text-indigo-500 font-bold hover:underline"
  >
    Login
  </Link>
</div>


      </div>
    </div>
  );
}


