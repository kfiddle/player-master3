import styles from "./Service.module.css";

const Service = (props) => {
  const { date, startTime, endTime, event } = props.service;

  return (
    <div>
      <div>{date}</div>
      <div>{startTime}</div>
      <div>{endTime}</div>
      <div>{event}</div>
    </div>
  );
};
export default Service;
