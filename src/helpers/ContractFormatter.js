import PartsEnumConverter from "./PartsEnumConverter";

const ContractFormatter = (parts, rank) => {
  const converter = PartsEnumConverter();
  let primaryPart = converter.enumToString(parts[0]);
  let secondaryPart = null;

  if (parts.length > 1) {
    secondaryPart = parts[1];
  }

  if (primaryPart === "Violin1" && rank === 1) {
    return "ConcertMaster";
  } else if (rank === 1) {
    return "Principal " + primaryPart;
  } else if (secondaryPart !== null) {
    return primaryPart + " " + rank + " / " + secondaryPart;
  } else {
    return primaryPart + " " + rank;
  }
};

export default ContractFormatter;
