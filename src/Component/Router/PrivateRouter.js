import { Navigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";

const PrivateRoute = ({ children, allowedRoles, path }) => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to={"/login"} replace />;
};

export default PrivateRoute;
