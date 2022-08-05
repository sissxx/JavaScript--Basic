function leap(input) {

    let leapYear = Number(input[0]);
    let year = Number(input[1]);

    // for (let i = leapYear; i <= year; i++) {
    //     if (i % 4 == 0) {
    //         console.log(i);
    //     }

    // }
    for (let i = leapYear; i <= year; i+=4) {
            console.log(i);
        

    }

}
leap(["1908", "1919"])