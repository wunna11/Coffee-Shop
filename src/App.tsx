import { useEffect } from "react";
import Router from "./Router";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./app/hooks";
import { loadAllToken, selectAuth } from "./features/Auth/authSlice";
import Login from "./pages/Login";
import { NavbarContext } from "./app/context";

function App() {
  const dispatch = useDispatch();
  const userData = useAppSelector(selectAuth);

  const username = userData?.data?.name

  console.log('user data', userData.data)

  useEffect(() => {
    const token = localStorage.getItem("token");
    const res = JSON.parse(token as string);
    console.log('res', res)
    dispatch(loadAllToken(res));
  }, [dispatch]);

  if (!userData) {
    return <Login />;
  }

  return (
    <NavbarContext.Provider value={{ username }}>
      <Router />
    </NavbarContext.Provider>
  );
}

export default App;
