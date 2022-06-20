import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import WhichServer from "../helpers/WhichServer";

const useGetList = (url) => {
  const [list, setList] = useState([]);
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
          setList(jsonified);
        } catch (error) {
          return console.log(error);
        }
      }
    };

    getData();
  }, [whichServer, url, jwtToken]);

  return list;
};

export default useGetList;
