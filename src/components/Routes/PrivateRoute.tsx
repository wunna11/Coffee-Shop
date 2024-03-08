import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteParams {
  redirectTo: string;
  isAuth: any;
}

export default function PrivateRoute(props: PrivateRouteParams) {
  const { redirectTo, isAuth } = props;
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}
