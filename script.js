
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button')

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error!";
        }
        break;
      case "+/-":
        display.innerText = (parseFloat(display.innerText) * -1).toString();
        break;
      case "%":
        display.innerText = (parseFloat(display.innerText) / 100).toString();
        break
      default:
        if (display.innerText === "0" && e.target.innerText !== '.') {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
