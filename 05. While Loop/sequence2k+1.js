function sequence(input) {
    let index = 0;
    let n = input[index];
    let result = 1;


    while (result <= n) {
        console.log(result);
        result = result * 2 + 1;

    }

}
sequence(["17"])