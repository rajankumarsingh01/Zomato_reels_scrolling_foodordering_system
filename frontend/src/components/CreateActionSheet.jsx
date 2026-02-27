import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreateActionSheet({ onClose }) {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/70 flex items-end z-50">
      <div className="bg-gray-900 w-full p-6 rounded-t-xl text-white space-y-4">

        {!role && (
          <>
            <h2 className="text-lg font-bold">What do you want to do?</h2>
            <button onClick={() => navigate("/user/login")} className="w-full bg-red-600 p-3 rounded">
              🍔 Order Food
            </button>
            <button onClick={() => navigate("/partner/login")} className="w-full bg-blue-600 p-3 rounded">
              🏪 Sell Food
            </button>
          </>
        )}

        {role === "user" && (
          <>
            <h2 className="text-lg font-bold">Become a Food Partner?</h2>
            <p className="text-sm opacity-70">
              Upload food reels & receive orders
            </p>
            <button onClick={() => navigate("/partner/register")} className="w-full bg-red-600 p-3 rounded">
              Switch to Partner
            </button>
          </>
        )}

        {role === "partner" && (
          <button onClick={() => navigate("/partner/upload")} className="w-full bg-red-600 p-3 rounded">
            Upload Food Reel
          </button>
        )}

        <button onClick={onClose} className="w-full text-gray-400">
          Cancel
        </button>
      </div>
    </div>
  );
}
