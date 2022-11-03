let operandPast = 0;
let operandCurrent = 0;
let dispString = '';
let operation = '';

const display = document.querySelector('.disp');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {button.addEventListener('click', e => {buttonPress(e)})});

function add (a, b){
    return a + b;
}

function mult(a, b){
    return a * b;
}

function operate(a, b, f){
    switch (f){
        case '+':
            return add(a, b);           
        case '-':  
            return add(a, -b);            
        case '*':
            return mult(a, b);
        case '/':            
            return b != 0 ? mult(a, 1/b) : 'ken nie';        
        default:
            return b;
    }
}

function buttonPress(button){
    let opButt = button.target.innerText;
    let numButt = Number(opButt);
    if (!isNaN(numButt)){
        addDigit(numButt);
    } else if (opButt === '.'){
        if (operandCurrent - Math.floor(operandCurrent) === 0){
            console.log(dispString);
            addDigit(opButt);
        }        
    } else {
        opPress(opButt);
    }
}

function addDigit(num){
    if (operation === '=') {
        dispString = '';
        operation = '';
    }
    if (dispString.length < 12){
        dispString += num.toString();    
        operandCurrent = Number(dispString);
        display.innerText = dispString;
    }
}

function opPress(button){
    if (button === 'clr'){

        operation = '';
        dispString = '';
        operandPast = 0;
        operandCurrent = 0;
        display.innerText = operandCurrent;
        console.clear();

    } else if (button === '='){     

        console.log('calculate');
        console.log(operandPast, operandCurrent, operation);        

        operandCurrent = operate(operandPast, operandCurrent, operation);
        display.innerText = typeof operandCurrent === 'number' ? operandCurrent.toPrecision(operandCurrent.toString().length <= 12 ? operandCurrent.toString().length : 12) : operandCurrent;
        operation = '=';

        console.log('calculated');
        console.log(operandPast, operandCurrent, operation);
        console.log('');

    } else {

        console.log('operate');
        console.log(operandPast, operandCurrent, operation);

        if (operation != '='){
            operandCurrent = operate(operandPast, operandCurrent, operation);            
            display.innerText = typeof operandCurrent === 'number' ? operandCurrent.toPrecision(operandCurrent.toString().length <= 12 ? operandCurrent.toString().length : 12) : operandCurrent;
        }
        operandPast = operandCurrent;
        dispString = '';
        operandCurrent = 0;
        operation = button;

        console.log('operated');
        console.log(operandPast, operandCurrent, operation);
        console.log('');
    }
}

//  x.toPrecision(x.toString().length <= 12 ? x.toString().length-1 : 12);  
