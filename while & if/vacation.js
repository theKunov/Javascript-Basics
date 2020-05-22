function vacation(input) {
    let vacationPrice = +input.shift();
    let moneySaved = +input.shift();

    let counterSave = 0;
    let counterSpend = 0;

    while (moneySaved < vacationPrice) {
        let action = input.shift();
        let moneyAdded = +input.shift();
        switch (action) {
            case "spend":
                moneySaved -= moneyAdded;
                counterSpend++
                counterSave++
                if (moneyAdded > moneySaved) {
                    moneySaved = 0;
                }
                break;

            case "save":
                moneySaved += moneyAdded;
                counterSave++
                counterSpend = 0;
                break;
        }
        if (counterSpend >= 5) {
            console.log(`You can't save the money. \n${counterSave}`)
            break;
        }
        
    }
    if (moneySaved >= vacationPrice) {
        console.log(`You saved the money for ${counterSave} days.`)
    }


}
vacation([
"110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"
])