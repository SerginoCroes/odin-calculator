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
            return 0;
    }
}

function buttonPress(button){
    let numButt = Number(button.target.innerText);

    if (!isNaN(numButt)){
        //console.log(numButt);
        dispString += numButt.toString(); 
        operandCurrent = Number(dispString);
        display.innerText = operandCurrent;

    } else if(numButt != 'clr'){
        let result = operate(operandPast, operandCurrent, operation);
        
        console.log(operandPast, operandCurrent);
        console.log(operation);
        console.log(result);

        dispString = result.toString();
        operation = button.target.innerText;

        operandPast = operandCurrent;
        operandCurrent = result;

        display.innerText = dispString;
    } else {
        operation = '';
        result = 0;
        operandCurrent = 0;
        operandPast = 0;
    }
}