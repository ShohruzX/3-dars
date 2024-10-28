let c = document.getElementsByClassName("clearResult");

const result = document.getElementById("result");

const number = document.getElementById("num");

function clearResult() {
  result.value = "";
}

function appendToResultseven() {
  result.value += "7";
}

function appendToResulteight() {
  result.value += "8";
}

function appendToResultnine() {
  result.value += "9";
}

function appendToResultfour() {
  result.value += "4";
}

function appendToResultfive() {
  result.value += "5";
}

function appendToResultsix() {
  result.value += "6";
}

function appendToResultone() {
  result.value += "1";
}

function appendToResulttwo() {
  result.value += "2";
}

function appendToResultthee() {
  result.value += "3";
}

function appendToResultnul() {
  result.value += "0";
}

function appendToResultplus() {
  result.value += "+";
}

function appendToResultminus() {
  result.value += "-";
}

function multiplication() {
  result.value += "*";
}

function division() {
  result.value += "/";
}

function clearResult() {
  result.value = "";
}

function answer() {
  const input = result.value;
  let resultValue;
  if (input.includes("+")) {
    const numbers = input.split("+");
    resultValue = parseFloat(numbers[0]) + parseFloat(numbers[1]);
  } else if (input.includes("-")) {
    const numbers = input.split("-");
    resultValue = parseFloat(numbers[0]) - parseFloat(numbers[1]);
  } else if (input.includes("*")) {
    const numbers = input.split("*");
    resultValue = parseFloat(numbers[0]) * parseFloat(numbers[1]);
  } else if (input.includes("/")) {
    const numbers = input.split("/");
    if (parseFloat(numbers[1]) === 0) {
      resultValue = "Error";
    } else {
      resultValue = parseFloat(numbers[0]) / parseFloat(numbers[1]);
    }
  } else {
    resultValue = "Error";
  }

  result.value = resultValue !== undefined ? resultValue : "Error";
}
