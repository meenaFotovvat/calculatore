// const calculator = {
//   displayValue: '0',
//   firstOperand: null,
//   waitingForSecondOperand: false,
//   operator: null,
// };

// function updateDisplay() {
//   // select the element with class of `calculator-screen`
//   const display = document.querySelector('.calculate');
//   console.log(display)
//   // update the value of the element with the contents of `displayValue`
//   display.innerHTML = calculator.displayValue;
//   console.log(display.value)
// }

// updateDisplay();


let paragraph = document.querySelector('.calculate');
let buttons = document.querySelectorAll('.col_1');

document.querySelector('.container').addEventListener('click', function(event) {
  console.log(event.target.innerHTML)
  paragraph.innerHTML = event.target.innerHTML
  
 
});