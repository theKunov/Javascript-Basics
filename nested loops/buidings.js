function building(input) {
    let floors = +input.shift();
    let count = +input.shift();
    for (let i = floors ; i >= 1; i--){
        let result = " ";
        type = "";
        if (i %2 == 0) {
            type = "O"
        }else {
            type = "A"
        }
        if(i == floors){
            type = "L"
        }
        for (let col = 0; col < count; col++){
            result += `${type}${i}${col} `
        }
        console.log(result)
    }
}
building([6, 4])