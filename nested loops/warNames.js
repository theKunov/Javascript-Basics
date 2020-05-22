function names(input) {
    let name = input.shift();
    let winner = " ";
   
    let greatest = Number.MIN_SAFE_INTEGER;
    while(name != "STOP"){
        let sum = 0;
        for(i = 0 ; i < name.length ; i++){
            sum += name.charCodeAt(i);
            
        }
        if (sum > greatest) {
            greatest = sum;
            winner = name
        }
        
        name = input.shift();
        
    }
    console.log(`Winner is ${winner} - ${greatest}!`);

}
names([
"Petar",
"Georgi",
"Stanimir",
"STOP"
])