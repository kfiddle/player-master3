import { useState, useEffect } from "react";

import useDateFormatter from "../../../hooks/useDateFormatter";
import usePost from "../../../hooks/usePost";
import DeetsBox from "./deetsBox/DeetsBox";

import styles from "./GigOffer.module.css";

const GigOffer = (props) => {
  const [services, setServices] = useState();
  const [clickedChoice, setClickedChoice] = useState();
  const [detailsClicked, setDetailsClicked] = useState(false);

  const gigOffer = props.gigOffer;
  const { show } = gigOffer;
  const { title } = show;

  const pusher = usePost();

  useEffect(() => {
    const getTheDate = async () => {
      const services = await pusher(show, "get-full-schedule-of-show");
      setServices(services);
    };

    getTheDate();
  }, []);

  const clickHandler = (choice) => {
    if (clickedChoice === choice) {
      setClickedChoice(null);
    } else {
      setClickedChoice(choice);
    }
  };

  const openDeets = () => {
    setDetailsClicked((previous) => !previous);
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div onClick={openDeets} className={styles.titleDiv}>
          {title}
        </div>
        <button
          className={
            clickedChoice === "accept" ? styles.clicked : styles.button
          }
          onClick={() => clickHandler("accept")}
        >
          ACCEPT
        </button>
        <button
          className={
            clickedChoice === "decline" ? styles.clicked : styles.button
          }
          onClick={() => clickHandler("decline")}
        >
          DECLINE
        </button>
        <button
          className={clickedChoice === "maybe" ? styles.clicked : styles.button}
          onClick={() => clickHandler("maybe")}
        >
          MAYBE
        </button>
      </div>
      {detailsClicked && <DeetsBox services={services} />}
    </div>
  );
};
export default GigOffer;
