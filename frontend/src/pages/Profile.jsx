import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user, role, setUser, setRole } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/user/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div style={{ padding: 20 }}>
      <h2>{user.fullName || user.name}</h2>

      {role === "user" ? (
        <>
          <button onClick={() => navigate("/orders")}>📦 My Orders</button>
          <button>❤️ Saved Foods</button>

          <hr />

          <button onClick={() => navigate("/partner/register")}>
            🏪 Become a Food Partner
          </button>
        </>
      ) : (
        <>
          <button onClick={() => navigate("/partner/orders")}>📦 Orders</button>
          <button>💰 Earnings</button>
          <button>⭐ Reviews</button>

          <hr />

          <button
            onClick={() => {
              setRole("user");
              navigate("/");
            }}
          >
            🔄 Switch to User Mode
          </button>
        </>
      )}

      <hr />

      <button
        onClick={() => {
          setUser(null);
          setRole(null);
          navigate("/user/login");
        }}
      >
        🚪 Logout
      </button>
    </div>
  );
}
