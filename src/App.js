import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";



import { authActions } from "./store/Auth";

import Layout from "./components/UI/Layout";
import LoginBox from "./components/login/LoginBox";

import "./App.css";
import PSA from "./components/psa/PSA";

function App() {
  const auth = useSelector((state) => state.auth);
  const { loggedIn, jwtToken, loggedInUser } = auth;

  const dispatch = useDispatch();


  return (
    <Layout>
      {!loggedIn && <LoginBox />}
      {loggedIn && <PSA />}
    </Layout>
  );
}

export default App;

/* <Routes>
<Route path="/login" element={<LoginBox />}/>
</Routes> */
