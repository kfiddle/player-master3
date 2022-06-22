const useTimeFormatter = (timeString) => {
  // 07:30:00

  if (timeString) {
    if (timeString[0] === "0") {
      return timeString.slice(1, 5);
    }
    return timeString.slice(0, 5);
  }

  return "";
};

export default useTimeFormatter;
