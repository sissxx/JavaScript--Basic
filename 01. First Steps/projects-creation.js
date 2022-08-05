function projects(input) {
    let name = input[0];
    let countProject = input [1];
    let time =  3*countProject;
    
    console.log(`The architect ${name} will need ${time} hours to complete ${countProject} project/s.`);
}

projects (["Georg", "4"])