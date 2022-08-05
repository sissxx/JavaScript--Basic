function operations(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let symbol = input[2];

    let result = "";
    let evenOrOdd = "";

    if (symbol === "+") {

        result = firstNumber + secondNumber;

    } else if (symbol === "-") {

        result = firstNumber - secondNumber;

    } else if (symbol === "*") {

        result = firstNumber * secondNumber;

    } else if (symbol === "/") {

        result = firstNumber / secondNumber;

        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        } else {
            console.log(`${firstNumber} ${symbol} ${secondNumber} = ${result.toFixed(2)}`);
        }

    } else if (symbol === "%") {
        result = firstNumber % secondNumber;
        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        } else {
            console.log(`${firstNumber} ${symbol} ${secondNumber} = ${result}`);
        }

    }

    if (symbol === "+" || symbol === "-" || symbol === "*") {
        if (result % 2 === 0) {
            evenOrOdd = "even"

        } else {
            evenOrOdd = "odd"
        }
        console.log(`${firstNumber} ${symbol} ${secondNumber} = ${result} - ${evenOrOdd}`);
    }



}
operations(["10", "0", "%"]);