function walk(input) {
    let index = 0;
    let steps = Number(input[index]);

    let allSteps = 0;
    let isFinished = false;

    while (steps != "Going home") {

        steps = Number(input[index]);
        allSteps += steps;

        if (allSteps >= 10000) {
            isFinished = true;
            break;
            //         allSteps -= 10000;
            //         console.log(`Goal reached! Good job!`);
            //         console.log(`${allSteps} steps over the goal!`);
            //         break;
        }
        index++;
        steps = input[index];
        if (steps === "Going home") {
            index++;
            steps = Number(input[index]);
            allSteps += steps;

            if (allSteps >= 10000) {
                isFinished = true;
            } else {
                console.log(`${10000 - allSteps} more steps to reach goal.`);
                break;

            }
            break;

            //         if (allSteps <= 10000) {
            //             allSteps -= 10000;
            //             console.log(`${Math.abs(allSteps)} more steps to reach goal.`);
            //             break;
            //         } else {
            //             allSteps -= 10000;

            //             console.log(`Goal reached! Good job!`);
            //             console.log(`${allSteps} steps over the goal!`);
            //             break;
            //         }

        }

    }
    if (isFinished === true) {
        console.log(`Goal reached! Good job!`);
        console.log(`${allSteps - 10000} steps over the goal!`);

    }

}
walk(["1500",
    "3000",
    "250",
    "1548",
    "2000",
    "Going home",
    "2000"
])