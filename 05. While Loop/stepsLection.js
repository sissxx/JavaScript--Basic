function walk(input) {

    let steps = 0;
    let command = input[input.length - 2];
    let goals = 10000;

    if (command === "Going home") {
        let index = 0;
        while (index < input.length - 2) {
            let currentSteps = Number(input[index]);
            steps += currentSteps;
            index++;
        }
        steps += Number(input[input.length - 1]);

    } else {
        let index = 0;
        while (index < input.length) {
            let currentSteps = Number(input[index]);
            steps += currentSteps;
            index++;
        }
    }
    if (steps >= goals) {
        console.log("Goal reached! Good job!");
        console.log(`${steps - goals} steps over the goal!`);
    } else {
        console.log(`${goals -  steps} more steps to reach goal.`);
    }

}
walk(["125",
"250",
"4000",
"30",
"2678",
"4682"])


