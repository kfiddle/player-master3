import styles from "./LoginFailMessage.module.css";

const LoginFailMessage = (props) => {
  const failureType = props.failureType;
  let printableMessage =
    failureType === "failMsg"
      ? "Please re-enter your credentials"
      : "Some other Problem";

  return <div className={styles.outerContainer}>{printableMessage}</div>;
};

export default LoginFailMessage;
