



import { useState, useContext } from "react";
import api from "../../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function PartnerLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser, setRole } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/food-partner/login", { email, password });

      // 🔥 VERY IMPORTANT
      setUser(res.data.foodPartner);
      setRole("partner");

      alert("Food Partner logged in");
      navigate("/partner/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 p-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20">

        {/* Icon */}
        <div className="text-center text-5xl mb-4">👨‍🍳</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          Food Partner Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60
          outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-5 py-3 rounded-xl bg-white/20 text-white placeholder-white/60
          outline-none focus:ring-2 focus:ring-purple-400 transition"
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl font-semibold text-lg text-white
          bg-gradient-to-r from-purple-500 to-pink-500
          hover:scale-105 hover:shadow-xl
          transition duration-300"
        >
          Login as Partner
        </button>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            Only registered food partners allowed
          </p>
          <Link 
            to="/partner/register" 
            className="mt-2 inline-block text-indigo-400 font-bold hover:underline"
          >
            Register
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PartnerLogin;
