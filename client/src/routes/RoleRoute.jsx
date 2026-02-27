import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RoleRoute = ({ role, children }) => {
  const { role: userRole } = useSelector((state) => state.auth);

  if (userRole !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RoleRoute;
