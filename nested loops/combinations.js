function combinations(input) {
    let n = +input.shift();
    let rightComb = 0;
    for (x = 0 ; x <= n ; x++){
        for (y = 0 ; y <= n ; y++){
            for (z = 0 ; z <= n ; z++){
                let result = x + y + z 
                if (result == n){
                    rightComb++
                    
                }
            }
        }
    }
    console.log(rightComb);
}
combinations([25])