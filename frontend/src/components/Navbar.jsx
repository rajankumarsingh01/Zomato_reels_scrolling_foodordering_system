// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
//       <Link to="/" style={{ marginRight: "10px" }}>Home</Link>

//       <Link to="/user/login" style={{ marginRight: "10px" }}>
//         User Login
//       </Link>

//       <Link to="/partner/login" style={{ marginRight: "10px" }}>
//         Partner Login
//       </Link>

//       <Link to="/partner/upload">
//         Upload Food
//       </Link>
//     </nav>
//   );
// }



// export default function Navbar() {
//   return (
//     <div className="fixed top-0 left-0 w-full h-14 z-50 flex items-center justify-between px-4 bg-gradient-to-b from-black">
//       <h1 className="text-lg font-bold">FoodReels 🍔</h1>

//       <div className="flex gap-3 text-sm">
//         <button className="border px-3 py-1 rounded-full">User</button>
//         <button className="border px-3 py-1 rounded-full">Partner</button>
//       </div>
//     </div>
//   );
// }



import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-14 flex items-center justify-between px-4 bg-black/90 z-50">
      <h1 className="text-lg font-bold">FoodReels 🍔</h1>
      <div className="flex gap-3">
        <Link to="/" className="border px-3 py-1 rounded-full">Home</Link>
        <Link to="/user/login" className="border px-3 py-1 rounded-full">User Login</Link>
        <Link to="/partner/login" className="border px-3 py-1 rounded-full">Partner Login</Link>
        <Link to="/partner/upload" className="border px-3 py-1 rounded-full">Upload Food</Link>
      </div>
    </nav>
  );
}
