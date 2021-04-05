const calculator = {
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

var displayValue = document.querySelector('.screen');

function displayMode(digit){
  const {waitingForSecondOperand} = calculator;
  const {innerText: digitValue} = digit.target

  if (waitingForSecondOperand === true){
    displayValue.value = digitValue;
    calculator.waitingForSecondOperand = false;
  } else{
    if (displayValue.value === "0"){
      displayValue.value = digitValue;
    } else {
      displayValue.value += digitValue;
    }
  }
}

function operatorHandler(nextOperator){
  const {firstOperand, operator} = calculator;
  const {innerText: latterOperator} = nextOperator.target;
   
  const inputValue = parseFloat(displayValue.value);

  if (firstOperand === null && !isNaN(inputValue)){
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculateOperands(calculator.firstOperand, calculator.operator, inputValue);
    displayValue.value = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = latterOperator;
}

function calculateOperands(firstOperand, Operator, secondOperand){
  console.log(calculator);
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
    return;
  }

  if (target.classList.contains('reset')) {
    resetButton();
    return;
  } 

  if (target.classList.contains('clear')) {
    console.log('clear', target.value);
    return;
  }

  displayMode(event);
});

