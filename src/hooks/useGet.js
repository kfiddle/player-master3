import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import WhichServer from "../helpers/WhichServer";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const whichServer = WhichServer();

  const auth = useSelector((state) => state.auth);
  const { jwtToken } = auth;

  useEffect(() => {
    const getData = async () => {
      if (!jwtToken) {
        return;
      } else {
        try {
          let response = await fetch(whichServer + url, {
            headers: { Authorization: jwtToken },
          });
          let jsonified = await response.json();
          setData(jsonified);
        } catch (error) {
          return console.log(error);
        }
      }
    };

    getData();
  }, [whichServer, url, jwtToken]);

  return data;
};

export default useGet;
