function pass(input) {
    let n = +input.shift();
    let l = +input.shift();
    let finalPrint = "";
    for (let num1 = 1; num1 < n; num1++) {
        for (let num2 = 1; num2 < n; num2++) {
            for (let letter1 = 1; letter1 <= l; letter1++) {
                let letter10 = String.fromCharCode(letter1 + 96);
                for (let letter2 = 1; letter2 <= l; letter2++) {
                    let letter20 = String.fromCharCode(letter2 + 96);
                   
                    for (let num3 = 1; num3 <= n; num3++) {
                         
                        if (num3 > num1 && num3 > num2) {
                            finalPrint += `${num1}${num2}${letter10}${letter20}${num3}` + " ";
                            
                        }
                    }
                }

            }
        }
    }
    console.log(`${finalPrint}`)
}
 pass(["3", "2"])