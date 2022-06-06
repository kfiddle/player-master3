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
      dispatch(authActions.login({ jwtToken }));

      const loggedInUserResponse = await PushBasic(
        user,
        "get-player-by-username",
        jwtToken
      );
      const loggedInUser = await loggedInUserResponse.json();
      console.log(loggedInUser);
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
