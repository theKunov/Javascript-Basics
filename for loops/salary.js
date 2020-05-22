function salary(input) {
    let tabsNum = +input.shift();
    let salary = +input.shift();
    for (let i = 1; i <= tabsNum; i++) {
        let tabs = input.shift();
        
        switch (tabs) {
            case "Facebook":
                salary -= 150;
                break;
            case "Instagram":
                salary -= 100;
                break;
            case "Reddit":
                salary -= 50;
                break;
            default:
                break;
        }   
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(salary.toFixed(0))
    }
}
salary([
    "10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit","Facebook", "Facebook"
])