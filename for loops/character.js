function character (input){
    let char = input.shift();
    let chatNum =  char[0]
    console.log(chatNum)
    for (let i = 0; i < char.length; i++) {
        let letter = char[i];
        console.log(i);
        
    }
}
character(["Softuni"])