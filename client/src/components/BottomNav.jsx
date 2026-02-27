import { NavLink } from "react-router-dom";
import { Home, Search, ShoppingBag, User } from "lucide-react";

const BottomNav = () => {
  const linkClass = ({ isActive }) =>
    `flex flex-col items-center ${
      isActive ? "text-white" : "text-gray-500"
    }`;

  return (
    <div className="fixed bottom-0 left-0 w-full h-14 bg-black border-t border-gray-800 flex justify-around items-center z-50">
      
      <NavLink to="/" className={linkClass}>
        <Home size={22} />
      </NavLink>

      <NavLink to="/search" className={linkClass}>
        <Search size={22} />
      </NavLink>

      <NavLink to="/orders" className={linkClass}>
        <ShoppingBag size={22} />
      </NavLink>

      <NavLink to="/profile" className={linkClass}>
        <User size={22} />
      </NavLink>

    </div>
  );
};

export default BottomNav;
