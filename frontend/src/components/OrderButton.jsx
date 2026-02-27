// export default function OrderButton() {
//   return (
//     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
//       <button className="bg-red-600 px-8 py-3 rounded-full font-bold opacity-60 cursor-not-allowed">
//         Order Now
//       </button>
//       <p className="text-xs text-center mt-1 opacity-60">
//         Login required
//       </p>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import api from "../api/axios";

// export default function OrderButton() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     api.get("/food")
//       .then(() => setIsLoggedIn(true))
//       .catch(() => setIsLoggedIn(false));
//   }, []);

//   const handleOrderClick = () => {
//     if (!isLoggedIn) {
//       alert("Login required to order food");
//       window.location.href = "/user/login";
//       return;
//     }

//     alert("Order flow will start here 🍔");
//   };

//   return (
//     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
//       <button
//         onClick={handleOrderClick}
//         className={`px-8 py-3 rounded-full font-bold transition
//           ${isLoggedIn
//             ? "bg-red-600 hover:bg-red-700"
//             : "bg-red-600 opacity-70"}
//         `}
//       >
//         Order Now
//       </button>

//       {!isLoggedIn && (
//         <p className="text-xs text-center mt-1 opacity-70">
//           Login required
//         </p>
//       )}
//     </div>
//   );
// }


// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function OrderButton() {
//   const auth = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (auth.loading) return null;

//   const handleClick = () => {
//     // USER NOT LOGGED IN
//     if (!auth.role) {
//       navigate("/user/login"); // ✅ proper React Router redirect
//       return;
//     }

//     // FOOD PARTNER CASE
//     if (auth.role === "partner") {
//       alert("Food partners cannot order food");
//       return;
//     }

//     // LOGGED-IN USER CASE
//     alert("Order flow will start (Step-4)");
//   };

//   return (
//     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
//       <button
//         onClick={handleClick}
//         className={`px-8 py-3 rounded-full font-bold transition
//           ${
//             auth.role === "partner"
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-red-600 hover:bg-red-700"
//           }
//         `}
//       >
//         Order Now
//       </button>

//       {auth.role === "partner" && (
//         <p className="text-xs text-center mt-1 opacity-70">
//           Partners cannot order
//         </p>
//       )}
//     </div>
//   );
// }


// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function OrderButton() {
//   const { role, loading } = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (loading) return null;

//   const handleClick = () => {
//     if (!role) {
//       navigate("/user/login"); // 🔥 redirect to login
//       return;
//     }

//     if (role === "partner") {
//       alert("Food partners cannot order food");
//       return;
//     }

//     // USER CASE
//     alert("Order flow will start (Step-4)");
//   };

//   return (
//     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
//       <button
//         onClick={handleClick}
//         className={`px-8 py-3 rounded-full font-bold transition
//           ${
//             role === "partner"
//               ? "bg-gray-600 cursor-not-allowed"
//               : "bg-red-600 hover:bg-red-700"
//           }`}
//       >
//         Order Now
//       </button>

//       {role === "partner" && (
//         <p className="text-xs text-center mt-1 opacity-70">
//           Partners cannot order
//         </p>
//       )}
//     </div>
//   );
// }



// niche ka code working hai


// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function OrderButton({ food }) {
//   const { role, loading } = useContext(AuthContext);
//   const navigate = useNavigate();

//   if (loading) return null;

//   const handleClick = () => {
//     if (!role) {
//       // 🔥 save intent
//       localStorage.setItem("pendingOrderFoodId", food._id);
//       navigate("/user/login");
//       return;
//     }

//     if (role === "partner") {
//       alert("Food partners cannot order food");
//       return;
//     }

//     // USER logged in
//     localStorage.setItem("pendingOrderFoodId", food._id);
//     navigate("/"); // reels page
//   };

//   return (
//     <div className="absolute bottom-15 left-1/2 -translate-x-1/2 z-20">
//       <button
//         onClick={handleClick}
//         className="px-7 py-2 rounded-full font-bold bg-red-600 hover:bg-red-700"
//       >
//         Order Now
//       </button>
//     </div>
//   );
// }


// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// export default function OrderButton({ foodId }) {
//   const { role, loading } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // if still loading auth info, or if no foodId, nothing to show
//   if (loading || !foodId) return null;

//   const handleClick = () => {
//     if (!role) {
//       // send user to login; later we can use state/redirect for after-login
//       navigate("/user/login", {
//         state: { redirectTo: `/orders/${foodId}` }
//       });
//       return;
//     }

//     if (role === "partner") {
//       alert("Food partners cannot order food");
//       return;
//     }

//     // user is logged in → go to order page for this food
//     navigate(`/orders/${foodId}`);
//   };

//   return (
//     <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
//       <button
//         onClick={handleClick}
//         className="px-7 py-2 rounded-full font-bold bg-red-600"
//       >
//         Order Now
//       </button>
//     </div>
//   );
// }
