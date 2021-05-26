var _button = document.getElementsByTagName("button");
var display = document.getElementById("screen");

var operand1 = null;
var operator = null;
var operand2 = null;

function isOperator(value) {
  return (
    value == "*" || value == "+" || value == "-" || value == "/" || value == "%"
  );
}

function isNumerical(value) {
  return (
    value == 0 ||
    value == 1 ||
    value == 2 ||
    value == 3 ||
    value == 4 ||
    value == 5 ||
    value == 6 ||
    value == 7 ||
    value == 8 ||
    value == 9 ||
    value == "."
  );
}

for (var i = 0; i < _button.length; i++) {
  _button[i].addEventListener("click", function () {
    var data = this.getAttribute("value");
    if (data == "clear") {
      display.innerHTML = "";
      operand1 = operand2 = operator = null;
    } else if (data == "=") {
      operand2 = display.innerHTML;
      var res = eval(operand1 + operator + operand2);
      display.innerHTML = res;
      operand1 = res;
    } else if (data == "change") {
      if (display.innerHTML != "") {
        display.innerHTML *= -1;
      }
    } else if (isOperator(data)) {
      operator = data;
      operand1 = display.innerHTML;
      display.innerHTML = "";
    } else {
      display.innerHTML += data;
    }
  });
}

document.addEventListener("keydown", function (event) {
  var x = event.key;
  if (isNumerical(x)) {
    display.innerHTML += x;
  } else if (isOperator(x)) {
    operator = x;
    operand1 = display.innerHTML;
    display.innerHTML = "";
  } else if (x == "Enter") {
    operand2 = display.innerHTML;
    var res = eval(operand1 + operator + operand2);
    display.innerHTML = res;
    operand1 = res;
  } else if (x == "Delete") {
    display.innerHTML = "";
    operand1 = operand2 = operator = null;
  } else if (x == "F9") {
    if (display.innerHTML != "") {
      display.innerHTML *= -1;
    }
  }
});
