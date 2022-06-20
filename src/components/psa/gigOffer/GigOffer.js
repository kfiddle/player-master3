import { useState, useEffect } from "react";

import useDateFormatter from "../../../hooks/useDateFormatter";
import usePost from "../../../hooks/usePost";

import styles from "./GigOffer.module.css";

const GigOffer = (props) => {
  const [primaryDate, setPrimaryDate] = useState();

  const gigOffer = props.gigOffer;
  const { show } = gigOffer;
  const { title } = show;

  const pusher = usePost();

  const displayableDate = useDateFormatter(primaryDate);

  useEffect(() => {
    const getTheDate = async () => {
      const date = await pusher(show, "get-date-from-show");
      setPrimaryDate(date);
    };

    getTheDate();
  }, []);

  return <div>{displayableDate}</div>;
};
export default GigOffer;
