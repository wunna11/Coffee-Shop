import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import NoPage from "./pages/NoPage";
import Proudct from "./pages/Proudct";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route
          element={
            <PrivateRoute redirectTo="/login" isAuth={useAuthentication()} />
          }
        >*/}
          <Route path="/" element={<Navbar />}>
            <Route index path="/" element={<Home />} />
            <Route path="/orders" element={<Order />} />
            <Route path="/products" element={<Proudct />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        {/*</Route>*/}

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
