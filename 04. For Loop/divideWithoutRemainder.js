function divide(input) {


    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;



    for (let i = 1; i <= n; i++) {

        let currentNum = Number(input[i]);

        if (currentNum % 2 === 0 && currentNum % 3 === 0 && currentNum % 4 === 0) {
            p1++
            p2++
            p3++
        } else if (currentNum % 2 === 0 && currentNum % 3 === 0) {
            p1++
            p2++
        } else if (currentNum % 2 === 0 && currentNum % 4 === 0) {
            p1++

            p3++

        } else if (currentNum % 2 === 0) {
            p1++;

        } else if (currentNum % 3 === 0) {
            p2++;

        } else if (currentNum % 4 === 0) {

            p3++;

        }

    }

    let p1Percent = (p1 / n) * 100;
    let p2Percent = (p2 / n) * 100;
    let p3Percent = (p3 / n) * 100;

    console.log(`${(p1Percent).toFixed(2)}%`);
    console.log(`${(p2Percent).toFixed(2)}%`);
    console.log(`${(p3Percent).toFixed(2)}%`);


}
divide

    (["3", "3", "6", "9"])