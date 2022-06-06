import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authActions } from "../../store/Auth";
import LoginFailMessage from "./failedLogin/LoginFailMessage";

import PushBasic from "../../helpers/PushBasic";

import styles from "./LoginBox.module.css";

const failMsg = "failMsg";
const email = "email";

const LoginBox = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  const dispatch = useDispatch();

  const usernameHandler = (event) => {
    setLoginFailed(false);
    setUser({ ...user, username: event.target.value });
  };

  const passwordHandler = (event) => {
    setLoginFailed(false);
    setUser({ ...user, password: event.target.value });
  };

  const sendItUp = async () => {
    const response = await PushBasic(user, "login");

    if (response.ok) {
      const jwtToken = response.headers.get("Authorization");
      const player = await response.json();
      dispatch(authActions.login({ jwtToken, player }));
    } else {
      setLoginFailed(true);
      setLoginMessage(failMsg);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <input
        className={styles.input}
        type="text"
        onChange={usernameHandler}
        placeholder={"your email"}
      ></input>

      <input
        className={styles.input}
        type="text"
        onChange={passwordHandler}
        placeholder={"your password"}
      ></input>

      <button className={styles.loginButton} onClick={sendItUp}>
        LOGIN
      </button>

      {loginFailed && <LoginFailMessage failureType={loginMessage} />}
    </div>
  );
};

export default LoginBox;
