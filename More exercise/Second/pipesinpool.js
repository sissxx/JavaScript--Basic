function pipes(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);
    let all = 0;

    p1 *= h;
    p2 *= h;


    all = p1 + p2;

    if (all <= v) {
        console.log(`The pool is ${((all/v)*100).toFixed(2)}% full. Pipe 1: ${((p1/all)* 100).toFixed(2)}%. Pipe 2: ${((p2/all)*100).toFixed(2)}%.`);
    } else if (v < all) {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${((all-v).toFixed(2))} liters.`);
    }


}
pipes(["100", "100", "100", "2.5"])