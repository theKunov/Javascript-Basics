function tax(input) {
    let enginePower = +input.shift();
    let town = input.shift();
    let standard = input.shift();
    let engineTax = 0;
    switch (town) {
        case "Sofia":
            if (enginePower <= 37) {
                engineTax = enginePower * 1.43;
            } else if (enginePower >= 38 && enginePower <= 55) {
                engineTax = enginePower * 1.50;
            } else if (enginePower > 55) {
                engineTax = enginePower * 2.68;
            }
            break;
        case "Vidin":
            if (enginePower <= 37) {
                engineTax = enginePower * 1.34;
            } else if (enginePower >= 38 && enginePower <= 55) {
                engineTax = enginePower * 1.40;
            } else if (enginePower > 55) {
                engineTax = enginePower * 2.54;
            }
            break;
        case "Varna":
            if (enginePower <= 37) {
                engineTax = enginePower * 1.37;
            } else if (enginePower >= 38 && enginePower <= 55) {
                engineTax = enginePower * 1.40;
            } else if (enginePower > 55) {
                engineTax = enginePower * 2.57;
            }
            break;
    }
    let taxFinal = 0;
    switch (standard) {
        case "Euro 4":
            taxFinal = engineTax * 0.85;
            break;
        case "Euro 5":
            taxFinal = engineTax * 0.83;
            break;
        case "Euro 6":
            taxFinal = engineTax * 0.80;
            break;
    }
    console.log(`${taxFinal.toFixed(2)} lv`);
}
tax([
    "29",
    "Sofia",
    "Euro 4"
])