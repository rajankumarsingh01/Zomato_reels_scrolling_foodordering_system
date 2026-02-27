// import { useNavigate, useLocation } from "react-router-dom";
// import { PlusCircle } from "lucide-react";

// export default function BottomNav({ onCreate }) {
//   const navigate = useNavigate();
//   // const location = useLocation();

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-2 text-white z-50">

//       <button onClick={() => navigate("/")}>🏠</button>
//       <button onClick={() => navigate("/search")}>🔍</button>

//       {/* MAGIC BUTTON */}
//       <button onClick={onCreate}>
//         <PlusCircle size={32} className="text-red-500" />
//       </button>



//       <button 
//       onClick={() => {
//     const foodId = localStorage.getItem("pendingOrderFoodId");
//     if (!foodId) {
//       alert("Please select a food first");
//       return;
//     }
//     navigate("/orders");
//     // navigate(`/orders/${food._id}`);

//   }}






//       >📦</button>








//       <button onClick={() => navigate("/profile")}>👤</button>
//     </div>
//   );
// }







// import { useNavigate } from "react-router-dom";
// import { PlusCircle } from "lucide-react";

// export default function BottomNav({ onCreate, selectedFoodId }) {
//   const navigate = useNavigate();

//   return (
//     <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-2 text-white z-50">
//       <button onClick={() => navigate("/")}>🏠</button>
//       <button onClick={() => navigate("/search")}>🔍</button>

//       <button onClick={onCreate}>
//         <PlusCircle size={32} className="text-red-500" />
//       </button>

//       {/* <button
//         onClick={() => {
//           if (!selectedFoodId) {
//             alert("Please select a food first");
//             return;
//           }
//           navigate(`/orders/${selectedFoodId}`);
//         }}
//       >
//         📦
//       </button> */}
//       <button
//         onClick={() => {
//           alert("Please select food from reel");
//         }}
//       >
//         📦
//       </button>

//       <button onClick={() => navigate("/profile")}>👤</button>
//     </div>
//   );
// }



import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";

export default function BottomNav({ onCreate, selectedFoodId }) {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around py-2 text-white z-50">
      
      <button onClick={() => navigate("/")}>🏠</button>
      <button onClick={() => navigate("/search")}>🔍</button>

      <button onClick={onCreate}>
        <PlusCircle size={32} className="text-red-500" />
      </button>

      {/* ✅ ORDER */}
      <button
        onClick={() => {
          
          navigate(`/orders/${selectedFoodId}`);
        }}
      >
        📦
      </button>

      <button onClick={() => navigate("/profile")}>👤</button>
    </div>
  );
}
