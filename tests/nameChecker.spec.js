const sentimentAnalysis = require("../src/client/js/nameChecker");

describe("Filter function", () => {
    test("it should filter by a search term Picard", () => {
      
      expect(nameChecker("Picard")).toEqual(true);
    });
  });

  describe("Filter function", () => {
    test("it should filter by an empty search term ", () => {
      
      expect(nameChecker("")).toEqual(false);
    });
  });
  
function nameChecker(inputText) {
  let names = [
    "Picard",
    "Janeway",
    "Kirk",
    "Archer",
    "Georgiou"
  ]

  if(names.includes(inputText)) {
      return true;
  }else{
      return false;
  }
}