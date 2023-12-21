import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";


import { AuthContext } from "../../Context/AuthProvider";
import Loading from "../Loading/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;