function min(input) {

    let n = Number(input[0]);
    let minNumb = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let current = Number(input[i]);

        if (current < minNumb) {
            minNumb = current;

        }
    }
    console.log(minNumb);

}
min(["2", "100", "99"])