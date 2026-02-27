




import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#eab308", "#3b82f6", "#ef4444"];

export default function PartnerDashboard() {
  const { user, role, loading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [foods, setFoods] = useState([]);
  const [orders, setOrders] = useState([]);

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    if (!loading && role !== "partner") {
      navigate("/partner/login");
    }
  }, [loading, role, navigate]);

  useEffect(() => {
    if (role === "partner") {
      fetchDashboardData();
    }
  }, [role]);

  /* ================= FETCH DATA ================= */
  const fetchDashboardData = async () => {
    try {
      const foodRes = await api.get("/food/partner", { withCredentials: true });
      const orderRes = await api.get("/orders/partner", { withCredentials: true });

      setFoods(foodRes.data.foods || []);
      setOrders(orderRes.data.orders || []);
    } catch (err) {
      console.error("DASHBOARD FETCH ERROR:", err);
    }
  };

  if (loading || role !== "partner") return null;

  /* ================= STATS ================= */
  const pending = orders.filter(o => o.status === "pending").length;
  const delivered = orders.filter(o => o.status === "delivered").length;

  const pieData = [
    { name: "Pending", value: pending },
    { name: "Delivered", value: delivered },
  ];

  /* ================= DELETE VIDEO ================= */
  const handleDeleteFood = async (foodId) => {
    const confirm = window.confirm("Are you sure you want to delete this video?");
    if (!confirm) return;

    try {
      await api.delete(`/food/${foodId}`, { withCredentials: true });
      setFoods(prev => prev.filter(food => food._id !== foodId));
    } catch (error) {
      console.error("DELETE ERROR:", error);
      alert("Failed to delete video");
    }
  };

  /* ================= LOGOUT ================= */
  const handleLogout = ()=>{
    logout();
    navigate("/partner/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-6 space-y-8">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">
            {user?.name?.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
            <p className="text-sm text-gray-400">Food Partner Dashboard</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl font-semibold"
        >
          🚪 Logout
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="🎥 Videos" value={foods.length} />
        <StatCard title="📦 Orders" value={orders.length} />
        <StatCard title="⏳ Pending" value={pending} />
        <StatCard title="✅ Delivered" value={delivered} />
      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid md:grid-cols-2 gap-6">
        <GlassCard title="📊 Orders Trend">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={orders}>
              <XAxis dataKey="createdAt" hide />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="quantity" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard title="📈 Order Status">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" label>
                {pieData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* ================= VIDEOS ================= */}
      <div>
        <h2 className="text-xl font-semibold mb-4">🎥 Your Uploaded Reels</h2>

        {foods.length === 0 && (
          <p className="text-gray-400">No videos uploaded yet</p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {foods.map(food => (
            <div
              key={food._id}
              className="bg-zinc-900/80 backdrop-blur-xl p-4 rounded-2xl hover:scale-[1.02] transition"
            >
              <video
                src={food.video}
                controls
                className="rounded-xl mb-3 w-full"
              />
              <h3 className="font-semibold">{food.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{food.description}</p>
              <button
                onClick={() => handleDeleteFood(food._id)}
                className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg text-sm"
              >
                🗑 Delete Video
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ACTION BUTTONS ================= */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/partner/upload")}
          className="bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 rounded-xl font-semibold"
        >
          ➕ Upload Food
        </button>

        <button
          onClick={() => navigate("/partner/orders")}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 rounded-xl font-semibold"
        >
          📦 View Orders
        </button>
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function StatCard({ title, value }) {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-xl p-4 rounded-xl text-center">
      <h3 className="text-gray-400">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function GlassCard({ title, children }) {
  return (
    <div className="bg-zinc-900/80 backdrop-blur-xl p-4 rounded-2xl">
      <h2 className="mb-3 font-semibold">{title}</h2>
      {children}
    </div>
  );
}
