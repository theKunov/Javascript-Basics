function num(input) {
    let n = +input.shift();
    let number = 1;
    for (i = 0 ; i <= n; i+=2) {
        
        console.log(number)
        number = number * 2 * 2 
    }
            
        
    
}
num([7])