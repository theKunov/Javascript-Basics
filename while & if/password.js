function pass(input) {
    let userName = input.shift();
    let password = input.shift();
    let secondPassword = input.shift();
    while (password != secondPassword)  {
        secondPassword = input.shift();
    }   
    console.log(`Welcome ${userName}!`)
}
pass(["Nakov", "1234", "fef15", "152554", "1234"])