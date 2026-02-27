









import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function PartnerOrders() {
  const { role, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (!loading && role !== "partner") {
      navigate("/partner/login");
    }
  }, [loading, role, navigate]);

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders/partner", {
        withCredentials: true,
      });
      setOrders(res.data.orders || []);
    } catch (err) {
      alert("Failed to load orders");
    } finally {
      setPageLoading(false);
    }
  };

  useEffect(() => {
    if (!loading && role === "partner") {
      fetchOrders();
    }
  }, [loading, role]);

  const updateStatus = async (orderId, status) => {
    try {
      await api.patch(
        `/orders/${orderId}/status`,
        { status },
        { withCredentials: true }
      );
      fetchOrders(); // refresh
    } catch (err) {
      alert("Failed to update order");
    }
  };

  if (loading || pageLoading) {
    return <p className="text-white text-center">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Incoming Orders</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      <div className="space-y-4">
        {orders.map(order => (
          <div
            key={order._id}
            className="bg-zinc-900 p-4 rounded-xl border border-zinc-700"
          >
            <h3 className="text-lg font-semibold">
              🍔 {order.food?.name}
            </h3>
            <p>👤 User: {order.user?.fullName}</p>
            <p>📦 Quantity: {order.quantity}</p>
            <p>📌 Status: {order.status}</p>

            {order.status === "pending" && (
              <div className="flex gap-3 mt-3">
                <button
                  onClick={() => updateStatus(order._id, "accepted")}
                  className="bg-green-600 px-4 py-2 rounded"
                >
                  ✅ Accept
                </button>

                <button
                  onClick={() => updateStatus(order._id, "rejected")}
                  className="bg-red-600 px-4 py-2 rounded"
                >
                  ❌ Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartnerOrders;
