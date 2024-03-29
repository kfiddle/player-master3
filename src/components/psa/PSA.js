import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContractFormatter from "../../helpers/ContractFormatter";

import { authActions } from "../../store/Auth";

import useGetList from "../../hooks/useGetList";
import usePost from "../../hooks/usePost";

import styles from "./PSA.module.css";
import GigOffer from "./gigOffer/GigOffer";

const PSA = () => {
  const auth = useSelector((state) => state.auth);
  const {
    loggedInPlayer: { firstNameArea, instruments, rank, id },
  } = auth;

  const contractedPart = ContractFormatter(instruments, rank);

  const dispatch = useDispatch();
  const pusher = usePost();
  const responsesRef = useRef({});

  const gigOffers = useGetList("offers-by-player/" + id);

  const displayableOffers = gigOffers.map((gigOffer, index) => (
    <GigOffer
      key={gigOffers.indexOf(gigOffer)}
      gigOffer={gigOffer}
      index={index}
      responsesRef={responsesRef}
    />
  ));

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const submitClicker = async () => {
    const gigOffersToSendBack = gigOffers.map((offer, index) => {
      return { ...offer, reply: responsesRef.current[index] };
    });
    console.log(gigOffersToSendBack);

    console.log(responsesRef);
    const response = await pusher(gigOffersToSendBack, "gig-offer-replies");
    console.log(response);
  };

  return (
    <div className={styles.mainPsaContainer}>
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
      <div className={styles.offersDiv}>{displayableOffers}</div>
      <div className={styles.submitDiv}>
        <button onClick={submitClicker} className={styles.submitButton}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default PSA;
