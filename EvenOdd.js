function EvenOdd(num) {
    let reminder = num % 2;
    if(reminder == 0){
        console.log("Number is Even");
    }else{
        console.log("Number is Odd");
    }
}

EvenOdd(4);