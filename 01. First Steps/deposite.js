function deposite(input) {

    let depositeSum = Number(input[0]);
    let depositePeriod = Number(input[1]);
    let percent = Number(input[2]);


    let sum = depositeSum + depositePeriod * ((depositeSum * percent / 100) / 12);

    console.log(sum);

}
deposite(['200', '3', '5,7']);