function clock(input) {
    let destination = input.shift();
    let moneyNeed = +input.shift();
    let savings = 0;
    
    while(savings < moneyNeed){
        let moneySaved = +input.shift();
        savings += moneySaved;
        if (destination == "End") {
            return;
        } 
        if (savings>= moneyNeed) {
            console.log(destination);
            savings = 0;
            destination = input.shift();
            moneyNeed = +input.shift();
        }
    }
    
    
}
clock([
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

