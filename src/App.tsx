import { Fragment, useEffect } from "react";
import Router from "./Router";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./app/hooks";
import { loadAllToken, selectAuth } from "./features/Auth/authSlice";
import { NavbarContext } from "./app/context";

function App() {
  const dispatch = useDispatch();
  const userData = useAppSelector(selectAuth);

  const username = userData?.data?.name;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const res = JSON.parse(token as string);
    dispatch(loadAllToken(res));
  }, [dispatch]);

  //if (!userData) {
  //  return <Login />;
  //}

  return (
    <Fragment>
      <NavbarContext.Provider value={{ username }}>
        <Router />
      </NavbarContext.Provider>
    </Fragment>
  );
}

export default App;
