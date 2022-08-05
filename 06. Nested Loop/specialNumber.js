function specialNumber(input) {


    let n = Number(input[0]);
    let output = "";

    for (let i = 1; i <= 9; i++) {
        for (let o = 1; o <= 9; o++) {
            for (let p = 1; p <= 9; p++) {
                for (let l = 1; l <= 9; l++) {
                    if (n % i === 0 &&
                        n % o === 0 &&
                        n % p === 0 &&
                        n % l === 0) {
                        output += `${i}${o}${p}${l} `

                    }
                }
            }
        }
    }
    console.log(output);
}
specialNumber(["3"])