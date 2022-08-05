function mooving(input) {
    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++;



    let cubic = w * l * h;
    let command = input[index];
    index++;

    // let freeSpaces = true;

    while (command !== "Done") {

        let boxes = Number(command);

        cubic -= boxes;
        command = input[index];
        index++;

        if (cubic < 0) {
            freeSpaces = false;

            console.log(`No more free space! You need ${Math.abs(cubic)} Cubic meters more.`);
            break;
        }
       
    }
    // if (freeSpaces) {
    //     console.log(`${cubic} Cubic meters left.`);
    // }

    if (cubic >= 0) {
        console.log(`${cubic} Cubic meters left.`);
    }


}
mooving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
