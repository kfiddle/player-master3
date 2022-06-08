import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../store/Auth";

import { IoIosLogOut } from "react-icons/io";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  const auth = useSelector((state) => state.auth);
  const { loggedIn, jwtToken, loggedInUser } = auth;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={styles.header}>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>Erie Philharmonic</h1>
      </div>
      <div className={styles.iconDiv}>
        {loggedIn && <IoIosLogOut className={styles.logoutIcon} onClick={logoutHandler} />}
      </div>
    </header>
  );
};

export default MainNavigation;
