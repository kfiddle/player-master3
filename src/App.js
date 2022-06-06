import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "./store/Auth";

import Layout from "./components/UI/Layout";
import LoginBox from "./components/login/LoginBox";

import "./App.css";

function App() {
  const auth = useSelector((state) => state.auth);
  const { loggedIn, jwtToken, loggedInUser } = auth;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <Layout>
      {!loggedIn && <LoginBox />}
      {loggedIn && (
        <div>
          {" "}
          <button onClick={logoutHandler}>LOG OUT {loggedInUser.username}</button>
        </div>
      )}
    </Layout>
  );
}

export default App;

/* <Routes>
<Route path="/login" element={<LoginBox />}/>
</Routes> */
