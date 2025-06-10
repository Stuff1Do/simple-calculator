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
let a;
let b;

buttonContainer.addEventListener('click', (e)=>{
    if(e.target.tagName != 'BUTTON') return;
    const value = e.target.getAttribute('data-value');

    switch(value){
        case '1':
            showInput.textContent += '1';
            break;
        case '2':
            showInput.textContent += '2';
            break;
        case '3':
            showInput.textContent += '3';
            break;
        case '4':
            showInput.textContent += '4';
            break;
        case '5':
            showInput.textContent += '5';
            break;
        case '6':
            showInput.textContent += '6';
            break;
        case '7':
            showInput.textContent += '7';
            break;
        case '8':
            showInput.textContent += '8';
            break;
        case '9':
            showInput.textContent +='9';
            break;
        case 'AC':
            showInput.textContent = '';
            break;
        case 'DEL':
            showInput.textContent = 'WIP'
            break;
        case '/':
            showInput.textContent += '÷';
            break;
        case '*':
            showInput.textContent += 'x';
            break;
        case '-':
            showInput.textContent += '-';
            break;
        case '+':
            showInput.textContent += '+';
            break;
        case '+/-':
            showInput.textContent = 'WIP';
            break;
        case '=':
            showInput.textContent = 'WIP';
            break;
        default: 
            showInput.textContent = 'Error';
            break;
    }
});

