function max(input) {
    let index = 0;
    let command = input[index];
    index++;

    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (command != "Stop") {
        let num = Number(command);
        if (num > maxNumber) {
            maxNumber = num;

        }
        command = input[index];
        index++;

    }
    console.log(maxNumber);


}
max
    (["45",
        "-20",
        "7",
        "99",
        "Stop"
    ])