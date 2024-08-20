let currentInput = '';
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;

function appendNumber(number) {
    currentInput += number;
    updateScreen(currentInput);
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (firstOperand !== '') calculate();
    firstOperand = currentInput;
    currentOperation = operation;
    currentInput = '';
}

function calculate() {
    if (firstOperand === '' || currentInput === '') return;
    secondOperand = currentInput;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }
    updateScreen(result);
    resetCalculator();
}

function clearScreen() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
    updateScreen('');
}

function resetCalculator() {
    currentInput = '';
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
}

function updateScreen(value) {
    document.getElementById('screen').value = value;
}
