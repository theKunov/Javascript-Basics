function wedding(input) {
    let a = +input.shift();
    let b = +input.shift();
    let barSide = +input.shift();

    let roomSpace = a*b;
    let bar = barSide * barSide;
    let danceFloor = roomSpace * 0.19;
    let spaceLeft = roomSpace - bar - danceFloor;
    let guest = spaceLeft/ 3.2
    console.log(Math.ceil(guest))
}
wedding(["70", "20", "4"])