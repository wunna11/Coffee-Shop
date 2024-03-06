import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteParams {
  redirectTo: string;
  isAuth: any;
}

export default function PrivateRoute(props: PrivateRouteParams) {
  const { redirectTo, isAuth } = props;
  console.log("Is auth ", isAuth, " redirectTo ", redirectTo);
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} />;
}
