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
const equalButton = document.querySelector('.equals');
const buttonContainer = document.querySelector('.input-container');
const buttons = document.querySelectorAll('button');


document.addEventListener('keydown', handleKeys);

function handleKeys(e){
    const keyMap = {
        '÷': '÷',
        'x': 'x',
        '-': '-',
        '+': '+',
        'Enter': '=', 
        '=': '=',
        'Backspace': 'DEL',
        'Delete': 'AC',
        '.': '.',
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9'
    };

    let value = keyMap[e.key];
    if(!value) return;

    const button = document.querySelector(`[data-value="${value}"]`)
    if(button) {
        button.click();
    }

}


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
let operationInputted = false;

let result;

function calculatePEMDAS(operators, operands){
    const precedence = {
        '+': 1,
        '-': 1,
        'x': 2,
        '÷': 2,
    };
    while(operators.length > 0){
        let highestIndex = -1;
        let highestPrecedence = -1;
        for(let i = 0; i < operators.length;i++){
            let currentPrecedence = precedence[operators[i]];
           if(currentPrecedence > highestPrecedence){
                highestPrecedence = currentPrecedence;
                highestIndex = i;
           }
        }
        let op = operators[highestIndex];
        let left = parseFloat(operands[highestIndex]);
        let right = parseFloat(operands[highestIndex+1]);           
        result = operate(op, left, right);
        operands.splice(highestIndex, 2, result);
        operators.splice(highestIndex, 1);
    }
    return result;
    
}   


buttonContainer.addEventListener('click', (e)=>{
    if(e.target.tagName != 'BUTTON') return;
    const value = e.target.getAttribute('data-value');
    
    switch(value){
        case '0':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '0';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '0';
            }      
            break;
        case '1':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '1';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '1';
            }
            
            
            break;
        case '2':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '2';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '2';
            }
            
            
            break;
        case '3':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '3';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '3';
            }
            
            break;
        case '4':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '4';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '4';
            }
            
            break;
        case '5':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '5';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '5';
            }
           
            break;
        case '6':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '6';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '6';
            }
            
            break;
        case '7':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '7';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '7';
            }
            
            break;
        case '8':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '8';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '8';
            }
            
            break;
        case '9':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                showInput.textContent = '9';
                result = null;
                justCalculated = false;
            }else {
                showInput.textContent += '9';
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
            showInput.textContent = 'WIP';
            break;
        case '/':
            if(operationInputted){
                return;
            }
            if(numberInputted){
                showInput.textContent += '÷';
                operation = '÷';
                secondValueBoolean = true;
                operationInputted = true;
            }
            break;
        case '*':
            if(operationInputted){
                return;
            }
            if(numberInputted){
                
                showInput.textContent += 'x';
                operation = 'x';
                secondValueBoolean = true;
                operationInputted = true;
            }
            break;
        case '-':
            if(operationInputted){
                return;
            }
                showInput.textContent += '-';
                operation = '-';
                secondValueBoolean = true;
                operationInputted = true;
            
            break;
        case '+':
            if(operationInputted){
                return;
            }
            if(numberInputted){
                showInput.textContent += '+';
                operation = '+';
                secondValueBoolean = true;
                operationInputted = true;
            }
            break;
        case '=':
            
        
            let value  = showInput.textContent;
            let operands = value.split(/[+\-÷x]/g);
            let operators = value.match(/[+\-÷x]/g) || [];
            
            if(operands.length < 2 && operators.length < 1){
                return;
            }
            result = calculatePEMDAS(operators, operands); 
            showInput.textContent = result;
            showPreview.textContent = '';
            justCalculated = true;
            numberInputted = false;
            operationInputted=false;
            break;
       
        default: 
            showInput.textContent = 'Error';
            showPreview.textContent = ' ';
            break;
    }
});

