import PartsEnumConverter from "./PartsEnumConverter";

const ContractFormatter = (instruments, rank) => {
  if (instruments || rank) {
    let primaryPart = instruments[0].name;
    let part2 = null;

    if (instruments[1] != null) {
      part2 = instruments[1].name;
    }
    let secondaryPart = null;

    if (instruments.length > 1) {
      secondaryPart = instruments[1].name;
    }

    if (primaryPart === "First Violin" && rank === 1) {
      return "Concertmaster";
    } else if (rank === 1) {
      return "Principal " + primaryPart;
    } else if (secondaryPart !== null) {
      return primaryPart + " " + rank + " / " + secondaryPart;
    } else {
      return primaryPart + " " + rank;
    }
  }
};

export default ContractFormatter;
