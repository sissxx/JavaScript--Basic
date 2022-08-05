function sumNumbs(input) {

    let index = 0;
    let num = input[index];
    index++;
    let sum = 0;


    while (sum < num) {
        let currentNumb = Number(input[index]);
        index++;
        sum += currentNumb;

    }
    console.log(sum);

}
sumNumbs(["100",
    "10",
    "20",
    "30",
    "40"
])