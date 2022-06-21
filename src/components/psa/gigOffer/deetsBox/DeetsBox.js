import Service from "./service/Service";


import styles from "./DeetsBox.module.css";

const DeetsBox = (props) => {
  const services = props.services;
  console.log(services);

  const displayableServices = services.map((service) => (
    <Service key={services.indexOf(service)} service={service}/>
  ));

  return <div>{displayableServices}</div>;
};

export default DeetsBox;
