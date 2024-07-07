//----------------------------------------------------
let string = "";
let temp = ["*", "/", "c"];
let display = document.querySelector("#display");
let clicked = document.querySelectorAll("button");
let symbols = Array.from(clicked).map((symbol) => {
  return symbol.textContent;
});
symbols = symbols.concat(temp);
function formatResult(result) {
  let num = parseFloat(result);
  if (Number.isInteger(num)) {
    return num.toString();
  } else {
    return num.toFixed(2);
  }
}
clicked.forEach((symbol) => {
  symbol.addEventListener("click", (event) => {
    let val = event.target.textContent;
    if (val === "=") {
      try {
        string = eval(string.replace("×", "*").replace("÷", "/"));
        string = formatResult(string);
        display.textContent = string;
      } catch (error) {
        display.textContent = "Error";
      }
      string = "";
    } else if (val === "C") {
      string = " ";
      display.textContent = "Cleared";
    } else if (val === "⌫") {
      string = string.slice(0, -1);
      display.textContent = string;
    } else {
      string += val;
      display.textContent = string;
    }
  });

  symbol.addEventListener("keypress", (event) => {
    // for Keyboard clicking
    let val = event.key;
    if (symbols.includes(event.key) || val == "Enter") {
      if (val == "=" || val == "Enter") {
        console.log(val);
        string = eval(string.replace("×", "*").replace("÷", "/"));
        string = formatResult(string);
        display.textContent = string;
        string = "";
      } else if (val == "/") {
        val = "÷";
        string += val;
        display.textContent = string;
      } else if (val == "*") {
        val = "×";
        string += val;
        display.textContent = string;
      } else if (val === "C" || val === "c") {
        string = " ";
        display.textContent = "Cleared";
      } else {
        string += val;
        display.textContent = string;
      }
    }
  });
});
