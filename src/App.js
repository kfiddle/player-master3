import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./components/UI/Layout";
import LoginBox from "./components/login/LoginBox";

import "./App.css";

function App() {
  const auth = useSelector((state) => state.auth);
  const { loggedIn, jwtToken, randomTruth } = auth;
  console.log(auth);
  console.log(jwtToken);
  console.log('random truth is ... ' + randomTruth);

  console.log('the moment of truth is ...  ' + loggedIn)

  // const burgerChoices = useSelector((state) => state.burger);
  // const { cheese, numberOfPickles, mustard, ounces, shown } = burgerChoices;

  return (
    <Layout>
      {!auth.loggedIn && <LoginBox />}
      {auth.loggedIn && <div>{auth.jwtToken}</div>}
    </Layout>
  );
}

export default App;

/* <Routes>
<Route path="/login" element={<LoginBox />}/>
</Routes> */
