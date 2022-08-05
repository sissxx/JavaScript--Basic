function graduation(input) {

    let index = 1;
    let name = input[0];
    let grade = Number(input[index]);
    let result = 0;
    let averageGrade = 0;
    let countGrade = 0;
    let badScale = 0;

    while (grade <= 12) {
        if (badScale === 2) {
            break;
        }
        grade = Number(input[index]);

        if (grade >= 4) {
            result += grade;

        } else {
            badScale++;
        }
        countGrade++;
        index++;
        grade = Number(input[index]);
    }

    if (badScale === 2) {
        console.log(`${name} has been excluded at ${countGrade-1} grade`);

    } else {
        averageGrade = result / countGrade;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }


}
graduation
(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

