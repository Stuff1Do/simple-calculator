const showInput = document.querySelector('.main-output');
const showPreview = document.querySelector('.result-preview');
const zero = document.querySelector('.0');
const one  = document.querySelector('.1');
const two  = document.querySelector('.2');
const three  = document.querySelector('.3');
const four  = document.querySelector('.4');
const five = document.querySelector('.5');
const six  = document.querySelector('.6');
const seven = document.querySelector('.7');
const eight  = document.querySelector('.8');
const nine = document.querySelector('.9');
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
    if(operation == 'add'){
        return add(a, b);
    }else if(operation  == 'subtract'){
        return subtract(a,b);
    }else if(operation  == 'multiply'){
        return multiply(a,b);
    }else if(operation  == 'divide'){
        return divide(a,b);
    }else{
        return Error;
    }
}

