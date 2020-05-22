function walk(input) {
    let steps = 0;
    
    while (steps < 10000) {
        let command = input.shift();
        
        if (command == "Going home") {
            steps += +input.shift();
            if(steps >= 10000){
                console.log(`Goal reached! Good job!`);
                return;
            }
            let stepsLeft = 10000 - steps;
            console.log(`${stepsLeft} more steps to reach goal.`)
            break;
        }else {
            steps += +command;
        }
        
    }
    if (steps > 10000) {
        console.log(`Goal reached! Good job!`);
    }
    
}
walk([
"1500",
"300",
"2500",
"3000",
"Going home",
"200"
])