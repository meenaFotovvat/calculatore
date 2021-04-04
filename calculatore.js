const calculator = {
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

var displayValue = document.querySelector('.screen');

function displayMode(digit){
  const {waitingForSecondOperand} = calculator;
  const {innerText} = digit.target

  if (waitingForSecondOperand === true){
    displayValue.value = innerText;
    calculator.waitingForSecondOperand = false;
  } else{
    if (displayValue.value === "0"){
      displayValue.value = innerText;
    } else {
      displayValue.value += innerText;
    }
  }
  
  // console.log(displayValue.value);
  console.log(calculator);
}

function operatorHandler(nextOperator){
  const {firstOperand, operator} = calculator;
  const {innerText} = nextOperator.target;
   
  const inputValue = parseFloat(displayValue.value);

  if (firstOperand === null && !isNaN(inputValue)){
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculateOperands(calculator.firstOperand, calculator.operator, inputValue);
    displayValue.value = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = innerText;
  console.log(calculator);
}

function calculateOperands(firstOperand, Operator, secondOperand){
  // const {innerText} = secondOperand.target;
  if(calculator.operator === "+"){
    return firstOperand + secondOperand;
  } else if(calculator.operator === "-"){
    return firstOperand - secondOperand;
  } else if(calculator.operator === "*"){
    return firstOperand * secondOperand;
  } else if(calculator.operator === "/"){
    return firstOperand / secondOperand;
  }

  return secondOperand;
}
 
function resetButton(){
  displayValue.value = "0"
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
    operatorHandler(event);
    // console.log('operator', target.value);
    return;
  }

  if (target.classList.contains('reset')) {
    resetButton();
    // console.log('reset', target.value);
    return;
  } 

  if (target.classList.contains('clear')) {
    console.log('clear', target.value);
    return;
  }

  displayMode(event);
  // console.log('digit', target.value);
});

