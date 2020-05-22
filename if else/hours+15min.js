function hours(input) {
    let hour = Number(input.shift());
    let minutes = Number(input.shift());
    let allTIme = hour * 60 + minutes + 15;
    let finalHour = parseInt(allTIme / 60)
    let min = allTIme % 60 
    
    if (finalHour > 23) {
        finalHour = finalHour - 24;
    }
    if (min < 10) {
        min = "0" + min
    }
    console.log(`${finalHour}:${min}`);
    

}
hours(["23", "59"])