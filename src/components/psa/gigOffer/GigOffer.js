import { useState, useEffect } from "react";

import useDateFormatter from "../../../hooks/useDateFormatter";
import usePost from "../../../hooks/usePost";

import styles from "./GigOffer.module.css";

const GigOffer = (props) => {
  const [primaryDate, setPrimaryDate] = useState();
  const [clickedButton, setClickedButton] = useState();

  const gigOffer = props.gigOffer;
  const { show } = gigOffer;
  const { title } = show;

  const pusher = usePost();

  //   const displayableDate = useDateFormatter(primaryDate);

  useEffect(() => {
    const getTheDate = async () => {
      //   const date = await pusher(show, "get-date-from-show");
      const dates = await pusher(show, "get-full-schedule-of-show");
      setPrimaryDate(dates);
      console.log(dates);
    };

    getTheDate();
  }, []);

  const clickHandler = (choice) => {
    if (clickedButton === choice) {
      setClickedButton(null);
    } else {
      setClickedButton(choice);
    }
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.titleDiv}>{title}</div>
      <button
        className={clickedButton === "accept" ? styles.clicked : styles.button}
        onClick={() => clickHandler("accept")}
      >
        ACCEPT
      </button>
      <button
        className={clickedButton === "decline" ? styles.clicked : styles.button}
        onClick={() => clickHandler("decline")}
      >
        DECLINE
      </button>
      <button
        className={clickedButton === "maybe" ? styles.clicked : styles.button}
        onClick={() => clickHandler("maybe")}
      >
        MAYBE
      </button>
    </div>
  );
};
export default GigOffer;
