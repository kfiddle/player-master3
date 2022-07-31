import useDateFormatter from "../../../../../hooks/useDateFormatter";
import useTimeFormatter from "../../../../../hooks/useTimeFormatter";

import styles from "./Service.module.css";

const Service = ({
  service: { date, startTime, endTime, event, location },
}) => {
  const printedEvent = event === "REHEARSAL" ? "rehearsal" : "concert";

  const printedDate = useDateFormatter(date);
  const start = useTimeFormatter(startTime);
  const end = useTimeFormatter(endTime);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.dateBox}>{printedDate}</div>
      <div className={styles.startBox}>{start}</div>
      <div className={styles.endBox}>{end}</div>
      <div className={styles.locationBox}>{location}</div>
      <div className={styles.eventBox}>{printedEvent}</div>
    </div>
  );
};
export default Service;
