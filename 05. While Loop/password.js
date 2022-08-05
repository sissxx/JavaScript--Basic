function password(input) {

    let index = 0;
    let user = input[index];
    index++;
    let pass = input[index];
    index++;
    // let rightPass = input[index];
    // index++;

    while (true) {
        let rightPass = input[index];
        index++;
        if (rightPass === pass) {
            console.log(`Welcome ${user}!`);
            break;
        }
    }


    // while (pass != rightPass) {
    //     pass = input[index];
    //     index++;
    //     break;
    // }
    // console.log(`Welcome ${user}!`);

}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"
])