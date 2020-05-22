function travel(input) {
    let destination = input.shift();
    let moneyNeeded = +input.shift();
    
    for (i = 0 ; i < moneyNeeded ; i){
        i += +input.shift();
        if (i >= moneyNeeded) {
            
            console.log(`Going to ${destination}!`)
            destination = input.shift();
            moneyNeeded = + input.shift();
            i = 0;
        }
        if (destination == "End") {
            break;
        }
    }
}travel([
    "France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
])