function wedding(input) {
    let sector = input.shift().charCodeAt()
   
    let rows = +input.shift();
    let seatsOdd = +input.shift();
    let counter = 0;
    for(let i = 65 ; i <= sector ; i++){
        for(let j = 1 ; j <= rows ; j++){
            if (j % 2 != 0 ) {
                let letter = String.fromCharCode(i) ;
                for(let m = 1 ; m <= seatsOdd ; m++){
                    let Number1 = String.fromCharCode(m + 96);
                    console.log(letter + j + Number1);
                    counter++;
                }    
            }else{
                let letter = String.fromCharCode(i) ;
                let seatsNeed = seatsOdd + 2;
                for(let n = 1; n <= seatsNeed ; n++){
                    let Number2 = String.fromCharCode(n + 96);
                    console.log(letter + j + Number2);
                    counter++;
                }
                
                
            }
            
        }
        rows++;
    }
    console.log(counter)
}
wedding([
    "B",
    "3",
    "2"
])