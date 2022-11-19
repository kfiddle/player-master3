import Service from "./service/Service";


import styles from "./DeetsBox.module.css";

const DeetsBox = ({ services }) => {

  const displayableServices = services.map((service) => (
    <Service key={services.indexOf(service)} service={service}/>
  ));

  return <div className={styles.outerContainer}>{displayableServices}</div>;
};

export default DeetsBox;
