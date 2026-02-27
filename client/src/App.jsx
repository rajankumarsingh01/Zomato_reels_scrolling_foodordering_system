// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchMeUser, fetchMePartner } from "./features/authThunks";
// import AppRoutes from "./routes/AppRoutes";
// import Search from "./pages/Search"
// import Orders from "./pages/Orders"
// import Profile from "./pages/Profile"

// import Reels from "./pages/Reel"

// function App() {

//     const dispatch = useDispatch();

//   useEffect(() => {
//     // try user first, then partner
//     dispatch(fetchMeUser()).catch(() => {
//       dispatch(fetchMePartner());
//     });
//   }, [dispatch]);

//   return (
    
//     <BrowserRouter>
//       <Routes>
//          {/* <Route path="/" element={<Home />} /> */}
//   <Route path="/search" element={<Search />} />
//   <Route path="/orders" element={<Orders />} />
//   <Route path="/profile" element={<Profile />} />
//         <Route path="/" element={<div className="text-center mt-10 text-xl">App Ready 🚀</div>} />
//       </Routes>
//       <Reels/>
//        <AppRoutes />
//     </BrowserRouter>
//   );
// }

// export default App;


// App.jsx
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMeUser, fetchMePartner } from "./features/authThunks";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Try fetching user first, if fails try partner
    dispatch(fetchMeUser()).catch(() => dispatch(fetchMePartner()));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
