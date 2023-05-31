const resultblock = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

let temp = "";
let result = "";

const buttonIDs = ["=", "+", "-", "*", "/"];

buttonIDs.forEach((id) => {
  document.getElementById(id).addEventListener("click", function () {
    performCalculation(id);
  });
});

document.getElementById("clear").addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
});

function getResult() {
  resultblock.innerHTML = `${temp}`;
}

function performCalculation(operator) {
  let numb1 = parseInt(num1.value);
  let numb2 = parseInt(num2.value);
  switch (operator) {
    case "+":
      temp = numb1 + numb2;
      result = `${numb1} + ${numb2} `;
    
      break;

    case "-":
      temp = numb1 - numb2;
      result = `${numb1} - ${numb2} `;
      break;

    case "*":
      temp = numb1 * numb2;
      result = `${numb1} * ${numb2} `;
      break;
    case "/":
      temp = numb1 / numb2;
      result = `${numb1} / ${numb2} `;
      break;

    case "=":
     
      getResult();
      break;

    default:
      result = "Invalid operator";
  }

  if (operator !== "=") {
    document.getElementById(
      "result"
    ).innerHTML = `${numb1} ${operator} ${numb2}`;
  }
}
