import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const { currentUser } = useSelector((state) => state.auth?.login);
  let isAuth = currentUser?.token;
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
