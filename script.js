const userInput = document.getElementById("number");
const output = document.getElementById("output");
const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (isInputValid(userInput.value)) {
    output.innerText = convertNumberToRoman(parseInt(userInput.value));
  }
});

const isInputValid = (inputValue) => {
  if (inputValue === "") {
    output.innerText = "Please enter a valid number";
    return false;
  }
  if (inputValue < 0) {
    output.innerText = "Negative numbers are not supported";
    return false;
  }
  if (inputValue > 3999) {
    output.innerText = "Enter a number less than or equal to 3999";
    return false;
  }
  return true;
};

const convertNumberToRoman = (number) => {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let result = "";
  romanNumerals.forEach((roman) => {
    while (number >= roman.value) {
      result += roman.symbol;
      number -= roman.value;
    }
  });
  return result;
};
