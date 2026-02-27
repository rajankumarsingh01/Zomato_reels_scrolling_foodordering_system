// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../../api/axios";

// export default function Orders() {
//   const [params] = useSearchParams();
//   const foodId = params.get("foodId");

//   const [food, setFood] = useState(null);
//   const [qty, setQty] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!foodId) return;

//     api.get(`/food/${foodId}`).then(res => {
//       setFood(res.data.food);
//     });
//   }, [foodId]);

//   const placeOrder = async () => {
//     setLoading(true);
//     try {
//       await api.post("/orders", {
//         foodId,
//         quantity: qty,
//       });
//       alert("Order placed successfully");
//     } catch (err) {
//       alert("Order failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!food) return <h3>Select a food to order</h3>;

//   return (
//     <div>
//       <h2>{food.name}</h2>
//       <p>{food.description}</p>

//       <div>
//         <button onClick={() => setQty(q => Math.max(1, q - 1))}>-</button>
//         <span>{qty}</span>
//         <button onClick={() => setQty(q + 1)}>+</button>
//       </div>

//       <button onClick={placeOrder} disabled={loading}>
//         {loading ? "Placing..." : "Confirm Order"}
//       </button>
//     </div>
//   );
// }
// above code work perfect






// import { useEffect, useState, useContext } from "react";
// import api from "../../api/axios";
// import { AuthContext } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";


// export default function Orders() {
//   const { foodId } = useParams();

//   const [food, setFood] = useState(null);
//   const [qty, setQty] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const { role } = useContext(AuthContext);
//   const navigate = useNavigate();

//   console.log("ORDERS COMPONENT MOUNTED");


//   // ✅ Auth check (FIXED)
//   useEffect(() => {
//     if (role === null || role === undefined) return;
//     if (role !== "user") navigate("/user/login");
//   }, [role]);

//   // // ✅ Load food
//   // useEffect(() => {
//   //   const foodId = localStorage.getItem("pendingOrderFoodId");
//   //   if (!foodId) return;

//   //   api.get(`/food/${foodId}`)
//   //     .then(res => setFood(res.data.food))
//   //     .catch(() => alert("Failed to load food"));
//   // }, []);
//   useEffect(() => {
//   if (!foodId) return;

//   console.log("FETCHING FOOD ID:", foodId);

//    api.get(`/food/${foodId}`)
//     .then(res => setFood(res.data.food))
//     .catch(err => alert("Failed to load food"));
// }, [foodId]);


//   const placeOrder = async () => {
//     if (!food) return;

//     setLoading(true);
//     try {
//       await api.post("/orders", {
//         foodId: food._id,
//         quantity: qty,
//       });

//       localStorage.removeItem("pendingOrderFoodId");
//       alert("Order placed successfully");
//       navigate("/"); // ya /my-orders
//     } catch {
//       alert("Order failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!food) {
//     return <div className="text-black p-4">No food selected</div>;
//   }

//   return (
//     // <div className="min-h-screen bg-black text-white p-4">
//     <div style={{ background: "white", color: "black" }}>

//       <h2 className="text-xl font-bold">{food.name}</h2>
//       <p className="text-gray-400">{food.description}</p>

//       <div className="flex gap-4 my-6">
//         <button onClick={() => setQty(q => Math.max(1, q - 1))}>➖</button>
//         <span>{qty}</span>
//         <button onClick={() => setQty(q => q + 1)}>➕</button>
//       </div>

//       <button
//         onClick={placeOrder}
//         disabled={loading}
//         className="w-full bg-red-600 py-3 rounded"
//       >
//         {loading ? "Placing..." : "Confirm Order"}
//       </button>
//     </div>
//   );
// }
