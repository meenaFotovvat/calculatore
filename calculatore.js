const calculator = {
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

// function updateDisplay() {
//   // select the element with class of `calculator-screen`
//   const display = document.querySelector('.calculate');
//   console.log(display)
//   // update the value of the element with the contents of `displayValue`
//   display.innerHTML = calculator.displayValue;
//   console.log(display.value)
// }

// updateDisplay();

let displayValue = document.querySelector('.screen');

// function displayMode(){
//   if (displayValue.value === "0"){
//     displayValue.value = event.target.innerHTML;
//   } else {
//     displayValue.value += event.target.innerHTML;
//   }
//   console.log(calculator);

// }

const name = {
  value : "pouria"
}

const {value } = name

function displayMode(digit){
  const {innerText} = digit.target
  if (displayValue.value === "0"){
    displayValue.value = innerText;
  } else {
    displayValue.value += innerText;
  }
  console.log(displayValue.value);

}

function operatorHandler(nextOperator){
  const { firstOperand, operator } = calculator;
   
  const inputValue = parseFloat(displayValue);

  if (calculator.firstOperand==="null" && !isNaN(inputValue)){
    calculator.firstOperand = inputValue;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;


}

const keys = document.querySelector('.container');
keys.addEventListener('click', (event) => {
  // Access the clicked element
  const { target } = event;
  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    // operatorHandler();
    // console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('reset')) {
    console.log('reset', target.value);
    return;
  } 

  if (target.classList.contains('clear')) {
    console.log('clear', target.value);
    return;
  }

  displayMode(event);
  // displayMode();
  // console.log('digit', target.value);
});

