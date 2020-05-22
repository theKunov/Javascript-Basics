function moving(input) {
    let a = +input.shift();
    let b = +input.shift();
    let c = +input.shift();
    let volume = a*b*c;

    
    while (volume >= 0 ){
        let boxNum = input.shift();
        if (boxNum == "Done") {
            console.log(`${volume} Cubic meters left.`)
        }
        volume -= boxNum;
        if (volume <= 0 ) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`)
        }
        
        
    }
    
}
moving([
"10",
"10",
"2",
"20",
"20",
"20",
"Done",
"122",
])