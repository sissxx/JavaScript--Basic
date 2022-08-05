function painting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let wall = x * y;
    let windows = 2.25;
    let twoPages = 2 * wall - 2 * windows;
    let backWall = x * x;
    let frontDoor = 2.4;
    let allFrontAndBack = 2 * backWall - frontDoor;
    let all = twoPages + allFrontAndBack;
    let green = all / 3.4;

    let roofTwo = 2 * (x * y);
    let twoTriangle = 2 * (x * h / 2);
    let allRoof = roofTwo + twoTriangle;
    let red = allRoof / 4.3;
    console.log(green.toFixed(2));
    console.log(red.toFixed(2));

}
painting(["10.25", "15.45", "8.88"])