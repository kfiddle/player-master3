import { useDispatch, useSelector } from "react-redux";
import ContractFormatter from "../../helpers/ContractFormatter";



import { authActions } from "../../store/Auth";

import styles from "./PSA.module.css";

const PSA = () => {
  const auth = useSelector((state) => state.auth);
  const { loggedInUser } = auth;
  const { firstNameArea, parts, rank } = loggedInUser;
  const primaryPart = parts[0];

  const contractedPart = ContractFormatter(parts, rank);


  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div>
      Dear {firstNameArea}, this form will serve as your Personal Service
      Agreement, (PSA). Below is a listing of all the services you are being
      offered by the Erie Philharmonic for the 2022-23 season, as of April 22,
      2022. As per the Master Agreement, Article III(d), you must accept or
      decline these services no later than June 30th of this year. Please check
      one of the boxes next to EACH service listed below, indicating whether you
      intend to accept or decline it. For the 2022-23 season, the Erie
      Philharmonic is currently able to offer you a total of X services at the
      position of {contractedPart}. You will be paid as per the Master
      Agreement, Article IV(b)
      <button onClick={logoutHandler}>Log Oat </button>
    </div>
  );
};

export default PSA;
