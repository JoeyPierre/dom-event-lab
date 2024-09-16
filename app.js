const calculator = document.querySelector("#calculator");
const display = document.querySelector(".display");

let num1 = "";
let num2 = "";
let operator = "";
let changeNum = false;

calculator.addEventListener("click", (event) => {
  // This section of the code checks if what we clicked was a number
  // First it fills num1; once you click on an operater, the changeNum variable switches to true, which means we are going to fill num2
  if (event.target.classList.contains("number") && changeNum === false) {
    num1 += event.target.innerText;
    display.innerText = num1;
  } else if (event.target.classList.contains("number") && changeNum === true) {
    num2 += event.target.innerText;
    display.innerText = num2;
  }

  // Store the operator (+, -, *, /) and switch changeNum variable to true
  if (
    event.target.classList.contains("operator") &&
    event.target.innerText !== "="
  ) {
    changeNum = true;
    operator = event.target.innerText;
  }

  if (event.target.innerText === "=") {
    if (operator === "+") {
      let answer = parseInt(num1) + parseInt(num2);
      display.innerText = answer;
    } else if (operator === "-") {
      let answer = parseInt(num1) - parseInt(num2);
      display.innerText = answer;
    } else if (operator === "*") {
      let answer = parseInt(num1) * parseInt(num2);
      display.innerText = answer;
    } else if (operator === "/") {
      let answer = parseInt(num1) / parseInt(num2);
      display.innerText = answer;
    }
  }
});
