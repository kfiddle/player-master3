const useDateFormatter = (date) => {
  if (date) {
    let year = date.slice(2, 4);
    let month = date[5] === "0" ? date.slice(6, 7) : date.slice(5, 7);
    let day = date[8] === "0" ? date.slice(9, 10) : date.slice(8, 10);

    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APRIL",
      "MAY",
      "JUN",
      "JULY",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    return `${months[month - 1]} ${day}`;
  }
  return "";
};

export default useDateFormatter;
