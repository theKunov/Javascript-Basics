function pyramid(input) {
    let num = +input.shift();
    let counter = 1;
    let result = "";
    for (let i = 1 ; i <= num ; i++){
        for(let n = 1; n <= i ; n++ ){
            if (counter > num) {
                break;
            }
            result += counter + " "; 
            counter++;
        }
        
        console.log(result);
        result = "";
    }

}
pyramid(["7"])