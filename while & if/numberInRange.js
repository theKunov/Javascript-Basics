function num(input) {
    let numb = Number(input.shift());
    
    while (numb < 1 || numb > 100) {
        console.log("Invalid number!");
        numb = Number(input.shift());
    }
    console.log(`The number is: ${numb}`)
}   
num(["200"])