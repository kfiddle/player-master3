import { Route, Routes,  } from "react-router-dom";

import Layout from "./components/UI/Layout";
import LoginBox from "./components/login/LoginBox";

import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<LoginBox />}/>
      </Routes>
  

    </Layout>
  );
}

export default App;

