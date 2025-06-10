const showInput = document.querySelector('.main-output');
const buttonContainer = document.querySelector('.input-container');

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

function sendToDisplay(str){
    if(showInput.textContent.length < 18){
        showInput.textContent = str;
    }
    
}

function addToDisplay(str){
    if(showInput.textContent.length < 18){
        showInput.textContent += str;
    }
}
buttonContainer.addEventListener('click', (e)=>{
    if(e.target.tagName != 'BUTTON') return;
    const value = e.target.getAttribute('data-value');
    
    switch(value){
        case '0':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                sendToDisplay('0')
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('0');
            }      
            break;
        case '1':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                sendToDisplay('1');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('1');
            }
            
            
            break;
        case '2':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                sendToDisplay('2');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('2');
            }
            
            
            break;
        case '3':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                sendToDisplay('3');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('3');
            }
            
            break;
        case '4':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                sendToDisplay('4');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('4');
            }
            
            break;
        case '5':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                sendToDisplay('5');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('5');
            }
           
            break;
        case '6':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                addToDisplay('6');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('6');
            }
            
            break;
        case '7':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                addToDisplay('7');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('7');
            }
            
            break;
        case '8':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                addToDisplay('8');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('8');
            }
            
            break;
        case '9':
            numberInputted = true;
            operationInputted =false;
            if(justCalculated){
                addToDisplay('9');
                result = null;
                justCalculated = false;
            }else {
                addToDisplay('9');
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
            justCalculated = false;
            numberInputted = false;
            operationInputted=false;

            break;
        case 'DEL':   
            let text = showInput.textContent;
            let sliced = text.slice(0, text.length-1);
            showInput.textContent = sliced;
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
            if(justCalculated){
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
            let string = result.toString();
            if(string.length > 13){
                let show;
                if(result % 1 != 0){
                    show = result.toFixed(4);
                }else{
                    show = result.toExponential(3);
                }
                sendToDisplay(show);
            }else{
                sendToDisplay(result);
            }   
            
            
            
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

