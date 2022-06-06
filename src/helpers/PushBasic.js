import WhichServer from "./WhichServer";

const PushBasic = async (objectToPush, pushFunction, jwtToken) => {
  const whichServer = WhichServer();

  let headers = { "Content-Type": "application/json" };
  if (jwtToken) {
    headers = { ...headers, Authorization: jwtToken };
  }

  let response = await fetch(whichServer + pushFunction, {
    method: "POST",
    headers,
    body: JSON.stringify(objectToPush),
  });

  return response;
};

export default PushBasic;
