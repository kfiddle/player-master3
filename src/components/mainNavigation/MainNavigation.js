import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>Erie Philharmonic</h1>
      </div>
    </header>
  );
};

export default MainNavigation;
