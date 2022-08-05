function exam(input) {

    let badScore = Number(input[0]);
    let index = 1;
    let task = input[index];
    let grade = Number(input[index]);

    let lastTask = "";
    let totalGrade = 0;
    let gradeSum = 0;
    let allTask = 0;
    let badTask = 0;
    let averageScore = 0;
    let limitedHitted = false;

    while (task !== "Enough") {

        index++;
        grade = Number(input[index]);
        gradeSum += grade;

        if (grade <= 4) {
            badTask++;
        }

        lastTask = task;
        totalGrade++;
        index++;
        task = input[index];

        if (task === "Enough") {
            averageScore = gradeSum / totalGrade;
            console.log(`Average score: ${averageScore.toFixed(2)}`);
            console.log(`Number of problems: ${totalGrade}`);
            console.log(`Last problem: ${lastTask}`);
        } else if (badTask === badScore) {
            limitedHitted = false;
            console.log(`You need a break, ${badScore} poor grades.`);
            break;
        }
    }

}
exam
    (["4",
        "Income",
        "5",
        "Game Info",
        "5",
        "Best Player",
        "3",
        "Enough"
    ])