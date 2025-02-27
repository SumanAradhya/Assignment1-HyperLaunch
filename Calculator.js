function Calculator(num1, num2, operator) {
    let result;
    if(operator == "Addition"){
       result = num1 + num2;
    } else if(operator == "Subtraction"){
       result = num1 - num2;
    } else if(operator == "Multiplication"){
       result = num1 * num2;
    } else if(operator == "Division"){
       result = num1 / num2;
    }
    return result;
 }
 
 console.log(Calculator(2, 5, "Addition"));
 console.log(Calculator(2, 5, "Subtraction"));
 console.log(Calculator(2, 5, "Multiplication"));
 console.log(Calculator(2, 5, "Division"));