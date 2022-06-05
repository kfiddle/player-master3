import { useState } from "react";

import styles from "./LoginBox.module.css";

const LoginBox = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const usernameHandler = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const passwordHandler = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const sendItUp = async () => {
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const jwtToken = response.headers.get("Authorization");
      console.log(jwtToken);
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
    </div>
  );
};

export default LoginBox;
