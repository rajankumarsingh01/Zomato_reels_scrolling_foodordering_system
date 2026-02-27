// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import UserLogin from "./pages/auth/UserLogin";
// import UserRegister from "./pages/auth/UserRegister";
// import PartnerLogin from "./pages/auth/PartnerLogin";
// import PartnerRegister from "./pages/auth/PartnerRegister";
// import FoodFeed from "./pages/user/FoodFeed";
// import UploadFood from "./pages/partner/UploadFood";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<FoodFeed />} />

//         <Route path="/user/login" element={<UserLogin />} />
//         <Route path="/user/register" element={<UserRegister />} />

//         <Route path="/partner/login" element={<PartnerLogin />} />
//         <Route path="/partner/register" element={<PartnerRegister />} />
//         <Route path="/partner/upload" element={<UploadFood />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import UserLogin from "./pages/auth/UserLogin";
// import UserRegister from "./pages/auth/UserRegister";
// import PartnerLogin from "./pages/auth/PartnerLogin";
// import PartnerRegister from "./pages/auth/PartnerRegister";

// import FoodFeed from "./pages/user/FoodFeed";
// import UploadFood from "./pages/partner/UploadFood";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<FoodFeed />} />

//         <Route path="/user/login" element={<UserLogin />} />
//         <Route path="/user/register" element={<UserRegister />} />

//         <Route path="/partner/login" element={<PartnerLogin />} />
//         <Route path="/partner/register" element={<PartnerRegister />} />
//         <Route path="/partner/upload" element={<UploadFood />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




// import FoodFeed from "./pages/user/FoodFeed";

// export default function App() {
//   return (
//     <div className="bg-black text-white h-screen w-screen overflow-hidden">
//       <FoodFeed />
//     </div>
//   );
// }




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// import UserLogin from "./pages/auth/UserLogin";
// import UserRegister from "./pages/auth/UserRegister";
// import PartnerLogin from "./pages/auth/PartnerLogin";
// import PartnerRegister from "./pages/auth/PartnerRegister";

// import FoodFeed from "./pages/user/FoodFeed";
// import UploadFood from "./pages/partner/UploadFood";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />

//       <Routes>
//         {/* HOME / FOOD REELS */}
//         <Route path="/" element={<FoodFeed />} />

//         {/* USER AUTH */}
//         <Route path="/user/login" element={<UserLogin />} />
//         <Route path="/user/register" element={<UserRegister />} />

//         {/* FOOD PARTNER AUTH */}
//         <Route path="/partner/login" element={<PartnerLogin />} />
//         <Route path="/partner/register" element={<PartnerRegister />} />
//         <Route path="/partner/upload" element={<UploadFood />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }


import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import UserLogin from "./pages/auth/UserLogin";
import UserRegister from "./pages/auth/UserRegister";
import PartnerLogin from "./pages/auth/PartnerLogin";
import PartnerRegister from "./pages/auth/PartnerRegister";

import FoodFeed from "./pages/user/FoodFeed";
import UploadFood from "./pages/partner/uploadFood";
import PartnerOrders from "./pages/partner/PartnerOrders";
import PartnerDashboard from "./pages/partner/PartnerDashboard";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
// import Orders from "./pages/user/Orders";



export default function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        {/* HOME PAGE */}
        <Route path="/" element={<FoodFeed />} />



        <Route path="/create" element={<Create />} />
<Route path="/profile" element={<Profile />} />
{/* <Route path="/orders/:foodId" element={<Orders />} /> */}




        {/* USER AUTH */}
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/user/register" element={<UserRegister />} />

        {/* FOOD PARTNER AUTH */}
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/register" element={<PartnerRegister />} />
        <Route path="/partner/upload" element={<UploadFood />} />

        <Route path="/partner/orders" element={<PartnerOrders />} />
        <Route path="/partner/dashboard" element={<PartnerDashboard />} />


      </Routes>
    </>
  );
}
