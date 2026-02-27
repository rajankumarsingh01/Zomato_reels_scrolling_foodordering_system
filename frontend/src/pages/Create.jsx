import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!role) {
    return (
      <>
        <h3>What do you want to do?</h3>
        <button onClick={() => navigate("/user/login")}>🍔 Order Food</button>
        <button onClick={() => navigate("/partner/login")}>🏪 Sell Food</button>
      </>
    );
  }

  if (role === "user") {
    return (
      <>
        <h3>Become a Food Partner?</h3>
        <button onClick={() => navigate("/partner/register")}>
          Switch to Partner
        </button>
      </>
    );
  }

  if (role === "partner") {
    navigate("/partner/upload");
    return null;
  }
}
