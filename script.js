const showInput = document.querySelector('.main-output');
const showPreview = document.querySelector('.result-preview');
const zero = document.querySelector('.zero');
const one  = document.querySelector('.one');
const two  = document.querySelector('.two');
const three  = document.querySelector('.three');
const four  = document.querySelector('.four');
const five = document.querySelector('.five');
const six  = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight  = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const divideButton = document.querySelector('.divide');
const multiplyButton = document.querySelector('.multiply');
const subtractButton = document.querySelector('.subtract');
const addButton = document.querySelector('.addition');
const percentButton = document.querySelector('.percent');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const dotButton  = document.querySelector('.dot');
const negateButton = document.querySelector('.negate');
const equalButton = document.querySelector('equals');
const buttonContainer = document.querySelector('.input-container');

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(operation, a = 0, b = 0){
    if(operation == '+'){
        return add(a, b);
    }else if(operation  == '-'){
        return subtract(a,b);
    }else if(operation  == 'x'){
        return multiply(a,b);
    }else if(operation  == '÷'){
        return divide(a,b);
    }else{
        return Error;
    }
}
let a;
let secondValueBoolean = false;
let b;
let operation;
let justCalculated = false;
let numberInputted  = false;

buttonContainer.addEventListener('click', (e)=>{
    if(e.target.tagName != 'BUTTON') return;
    const value = e.target.getAttribute('data-value');

    switch(value){
        case '0':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '0';
                justCalculated = false;
            }else {
                showInput.textContent += '0';
            }
            
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }      
            break;
        case '1':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '1';
                justCalculated = false;
            }else {
                showInput.textContent += '1';
            }
            
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }               
            
            
            break;
        case '2':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '2';
                justCalculated = false;
            }else {
                showInput.textContent += '2';
            }
            
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }else{
                showPreview.textContent = '';
            }
            
            break;
        case '3':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '3';
                justCalculated = false;
            }else {
                showInput.textContent += '3';
            }
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }else{
                showPreview.textContent = '';
            }
            break;
        case '4':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '4';
                justCalculated = false;
            }else {
                showInput.textContent += '4';
            }
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }else{
                showPreview.textContent = '';
            }
            break;
        case '5':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '5';
                justCalculated = false;
            }else {
                showInput.textContent += '5';
            }
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }else{
                showPreview.textContent = '';
            }
            break;
        case '6':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '6';
                justCalculated = false;
            }else {
                showInput.textContent += '6';
            }
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }else{
                showPreview.textContent = '';
            }
            break;
        case '7':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '7';
                justCalculated = false;
            }else {
                showInput.textContent += '7';
            }
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }else{
                showPreview.textContent = '';
            }
            break;
        case '8':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '8';
                justCalculated = false;
            }else {
                showInput.textContent += '8';
            }
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }else{
                showPreview.textContent = '';
            }
            break;
        case '9':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '9';
                justCalculated = false;
            }else {
                showInput.textContent += '9';
            }
            if(secondValueBoolean){
                let value  = showInput.textContent;
                let split = value.split(`${operation}`);
                b = parseFloat(split[1]);
                let result = operate(operation, a, b);
                showPreview.textContent = result;
            }else{
                showPreview.textContent = '';
            }
            break;
        case '.':
            numberInputted = true;
            if(justCalculated){
                showInput.textContent = '.';
                justCalculated = false;
            }else {
                showInput.textContent += '.';
            }
            
            break;
        case 'AC':
            showInput.textContent = '';
            showPreview.textContent = '';
            a = null;
            b = null;
            operation = null;
            secondValueBoolean = false;
            justCalculated = false;
            numberInputted = false;
            break;
        case 'DEL':
            showInput.textContent = 'WIP'
            break;
        case '/':
            if(numberInputted){
                a = parseFloat(showInput.textContent);
                showInput.textContent += '÷';
                operation = '÷';
                secondValueBoolean = true;
            }
            break;
        case '*':
            if(numberInputted){
                a = parseFloat(showInput.textContent);
                showInput.textContent += 'x';
                operation = 'x';
                secondValueBoolean = true;
            }
            break;
        case '-':
            if(numberInputted){
                a = parseFloat(showInput.textContent);
                showInput.textContent += '-';
                operation = '-';
                secondValueBoolean = true;
            }
            break;
        case '+':
            if(numberInputted){
                a = parseFloat(showInput.textContent);
                showInput.textContent += '+';
                operation = '+';
                secondValueBoolean = true;
            }
            break;
        case '=':
            let result = operate(operation, a,b);
            showInput.textContent = result;
            showPreview.textContent = ' ';
            a = null;
            b = null;
            operation = null;
            justCalculated = true;
            secondValueBoolean = false;
            numberInputted = false;
            break;
        default: 
            showInput.textContent = 'Error';
            showPreview.textContent = ' ';
            break;
    }
});

