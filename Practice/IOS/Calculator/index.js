const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const percent = document.querySelector('.percent');

let firstValue = "";
let isFirtsValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
      let value = e.target.textContent;
      if (!isFirtsValue) {
        getFirstValue(value);
      } else {
        getSecondValue(value);
      }
    });
  }
  
function getFirstValue(value) {
    result.innerHTML = "";
    firstValue += value;
    result.innerHTML = firstValue;
    firstValue = parseFloat(firstValue);
}
  
function getSecondValue(value) {
    if (firstValue !== "" && sign !== "") {
      secondValue += value;
      result.innerHTML = secondValue;
      secondValue = parseFloat(secondValue);
    }
}
  
function getSign() {
    for (let i = 0; i < signs.length; i++) {
      signs[i].addEventListener('click', (e) => {
        sign = e.target.textContent;
        isFirtsValue = true;
      });
    }
}

getSign();
  
equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
      resultValue = firstValue + secondValue;
    } else if (sign === "-") {
      resultValue = firstValue - secondValue;
    } else if (sign === "x") {
      resultValue = firstValue * secondValue;
    } else if (sign === "/") {
      resultValue = firstValue / secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";

    checkResultLength();
});

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);

    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue != "") {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if (firstValue != "" && secondValue != "" && sign != "") {
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    result.innerHTML = 0
    firstValue = "";
    isFirtsValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})
