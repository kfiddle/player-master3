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
  const submitClicked = props.submitClicked;

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

  useEffect(() => {
    const sendItUp = async () => {
      const offerInReply = { ...gigOffer, reply: clickedChoice };
      const response = await pusher(offerInReply, "gig-offer-reply");
      console.log(response);
    };

    if (submitClicked) {
      sendItUp();
    }
  }, [submitClicked]);

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
            clickedChoice === "ACCEPT" ? styles.clicked : styles.button
          }
          onClick={() => clickHandler("ACCEPT")}
        >
          ACCEPT
        </button>
        <button
          className={
            clickedChoice === "DECLINE" ? styles.clicked : styles.button
          }
          onClick={() => clickHandler("DECLINE")}
        >
          DECLINE
        </button>
        <button
          className={clickedChoice === "MAYBE" ? styles.clicked : styles.button}
          onClick={() => clickHandler("MAYBE")}
        >
          MAYBE
        </button>
      </div>
      {detailsClicked && <DeetsBox services={services} />}
    </div>
  );
};
export default GigOffer;
