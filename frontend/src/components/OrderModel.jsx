// import { useState } from "react";
// import api from "../api/axios";

// export default function OrderModal({ food, onClose }) {
//   const [qty, setQty] = useState(1);
//   const [loading, setLoading] = useState(false);

//   const placeOrder = async () => {
//     try {
//       setLoading(true);
//       await api.post("/orders", {
//         foodId: food._id,
//         quantity: qty,
//       });
//       alert("Order placed successfully");
//       onClose();
//     } catch (err) {
//       alert(err.response?.data?.message || "Order failed");
//     } finally {
//       setLoading(false);
//     } 
//   };

//   return (
//     <div className="fixed inset-0 z-51 flex items-end bg-black/60">
//       <div className="w-full bg-white text-black rounded-t-2xl p-5">
//         <h2 className="text-lg font-bold">{food.name}</h2>
//         <p className="text-sm opacity-70 mb-4">{food.description}</p>

//         {/* Quantity */}
//         <div className="flex items-center justify-between mb-4">
//           <span className="font-semibold">Quantity</span>
//           <div className="flex items-center gap-3">
//             <button
//               onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
//               className="px-3 py-1 bg-gray-200 rounded"
//             >
//               −
//             </button>
//             <span>{qty}</span>
//             <button
//               onClick={() => setQty(qty + 1)}
//               className="px-3 py-1 bg-gray-200 rounded"
//             >
//               +
//             </button>
//           </div>
//         </div>

//         {/* Actions */}
//         <div className="flex gap-3">
//           <button
//             onClick={onClose}
//             className="w-1/2 py-3 rounded bg-gray-300"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={placeOrder}
//             disabled={loading}
//             className="w-1/2 py-3 rounded bg-red-600 text-white"
//           >
//             {loading ? "Placing..." : "Confirm Order"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
