





import { useState } from "react";
import api from "../../api/axios";
import { Link } from "react-router-dom";

export default function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // await api.post("/auth/user/login", { email, password });
      // alert("Login successful");
      // window.location.href = "/";
      
await api.post("/auth/user/login", { email, password });

 const pendingFood = localStorage.getItem("pendingOrderFoodId");

 if (pendingFood) {
   window.location.href = `/orders/${pendingFood}`;
 } else {
   window.location.href = "/";
 }





    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900 p-4">
      {/* Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20">

        {/* Icon */}
        <div className="text-center text-5xl mb-4">👤</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          User Login
        </h2>

        {/* Form Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="email"
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
            onClick={handleLogin}
            className="w-full py-3 rounded-xl font-semibold text-lg text-white
            bg-gradient-to-r from-purple-500 to-pink-500
            hover:scale-105 hover:shadow-xl
            transition duration-300"
          >
            Login
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            Don't have an account?
          </p>
          <Link 
            to="/user/register" 
            className="mt-2 inline-block text-indigo-400 font-bold hover:underline"
          >
            Register
          </Link>
        </div>

      </div>
    </div>
  );
}
