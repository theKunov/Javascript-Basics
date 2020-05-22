function account(input) {
    let n = Number(input.shift());
    let counter = 0;
    let sum = 0;
    while (n > counter) {
        let amount = Number(input.shift());
        if (amount < 0) {
            console.log("Invalid operation!");
            break;
        } 
        sum = sum + amount
        console.log(`Increase: ${amount.toFixed(2)}`);
        counter++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}
account(["5", "120", "45.55", "-150"])