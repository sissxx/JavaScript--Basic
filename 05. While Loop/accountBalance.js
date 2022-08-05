function account(input) {
    let index = 0;
    let money = input[index];
    index++;

    let total = 0;

    while (money !== "NoMoreMoney") {

        let num = Number(money);
        if (num < 0) {

            console.log("Invalid operation!");
            break;
        }
        total += num;
        console.log(`Increase: ${num.toFixed(2)}`);


        money = input[index];
        index++;


    }
    console.log(`Total: ${total.toFixed(2)}`);

}
account(["5.51", "69.42", "100", "NoMoreMoney"]);