function CalculatorSwitch(num1, num2, operator){
    let result;
    switch(operator){
        case '+': result = num1 + num2;
        break;
        case '-': result = num1 - num2;
        break;
        case '*': result = num1 * num2;
        break;
        case '/': result = num1 / num2;
    }
    return result;
}
console.log(CalculatorSwitch(1, 3,"+"));
console.log(CalculatorSwitch(1, 3,"-"));
console.log(CalculatorSwitch(1, 3,"*"));
console.log(CalculatorSwitch(1, 3,"/"));

