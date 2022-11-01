


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
    }
}

