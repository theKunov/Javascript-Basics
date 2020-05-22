function train(input) {
    let jurie = +input.shift();
    let presentation = input.shift();
    let allScore = 0;
    let counter = 0;
    
    while (presentation != "Finish") {
        let finalScore = 0;
        for (let i = 1; i <= jurie; i++) {
            let score = +input.shift();
        
            finalScore += score;
        }
        counter++;
        let scoreMidlle = finalScore / jurie;
        allScore += scoreMidlle;
        console.log(`${presentation} - ${scoreMidlle.toFixed(2)}.`);
        presentation = input.shift();

    }
    console.log(`Student's final assessment is ${(allScore / counter).toFixed(2)}.`)
}
train([
"3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"
])