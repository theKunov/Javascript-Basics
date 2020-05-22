function exam(input) {
    let numGrade= +input.shift();
    let countBadgrade = 0;
    let counter = 0;
    let allGrade = 0;
    let lastTask = 0;
    while (countBadgrade < numGrade) {
        let name = input.shift();
        let currGrade = +input.shift();
        let lastGrade = allGrade / counter
        allGrade += currGrade;
        
        if (name == "Enough") {
            
            console.log(`Average score: ${lastGrade.toFixed(2)}\nNumber of problems: ${counter}\nLast problem: ${lastTask}`)
            break;
        }
        lastTask = name;
        
        
        if (currGrade <= 4.00) {
            countBadgrade++;
        }

        counter++;
    }
    if (countBadgrade >= numGrade) {
        console.log(`You need a break, ${numGrade} poor grades.`)
    }
    
    
}
exam([
'3',
'Money',
'6',
'Story',
'4',
'Spring Time',
'5',
'Bus',
'6',
'Enough'
])