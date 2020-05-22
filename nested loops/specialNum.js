function special(input) {
    let n = +input.shift();
    let finalPrint = "";
    for (let num1 = 1; num1 <= n; num1++) {
        if (n % num1 == 0 && num1 < 10) {
            for (let num2 = 1; num2 <= n; num2++) {
                if (n % num2 == 0 && num2 < 10) {
                    for (let num3 = 1; num3 <= n; num3++) {
                        if (n % num3 == 0 && num3 < 10) {
                            for (let num4 = 1; num4 <= n; num4++) {
                                if (n % num4 == 0 && num4 < 10) {
                                    let specialNum = `${num1}${num2}${num3}${num4}`;
                                    if (specialNum <= 9999) {
                                        finalPrint += specialNum + " ";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    console.log(`${finalPrint}`)
}
special(["16"])