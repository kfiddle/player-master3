import styles from "./DeetsBox.module.css";

const DeetsBox = (props) => {
  const dates = props.dates;
  // date, startTime, EndTime, Event next to be destructured
  console.log(dates);

  const displayableDates = dates.map((date) => (
    <div key={dates.indexOf(date)}>date</div>
  ));

  return <div>{displayableDates}</div>;
};

export default DeetsBox;
