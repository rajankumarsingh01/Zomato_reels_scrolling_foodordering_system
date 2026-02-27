import { Routes, Route } from "react-router-dom";
import Reels from "../pages/Reel";
import Search from "../pages/Search";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import UserLogin from "../pages/auth/UserLogin";
import UserRegister from "../pages/auth/UserRegister";
import PartnerLogin from "../pages/auth/PartnerLogin";
import PartnerRegister from "../pages/auth/PartnerRegister";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/login" element={<UserLogin />} />
    <Route path="/register" element={<UserRegister />} />
    <Route path="/partner/login" element={<PartnerLogin />} />
    <Route path="/partner/register" element={<PartnerRegister />} />

    {/* Main */}
    <Route path="/" element={<Reels />} />
    <Route path="/search" element={<Search />} />

    {/* Protected Routes */}
    <Route
      path="/orders"
      element={
        <ProtectedRoute>
          <RoleRoute role="user">
            <Orders />
          </RoleRoute>
        </ProtectedRoute>
      }
    />

    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRoutes;
