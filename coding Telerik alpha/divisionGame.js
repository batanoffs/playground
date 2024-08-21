// When not playing snooker, Ronnie and Reanne play The Division Game. The rules are simple - they think of two numbers and then search for the hidden number within it. The hidden number is created by taking all the digits from the main number, and choosing only those which can divide it. For example, in 12345, the hidden number is 135, because 1, 3 and 5 can divide 12345.
// The winner of the game is the one with a higher hidden number.
// Input
// Exactly two lines:

//     Ronnie's number
//     Reanne's number

// Output
// Exactly one line:
//     if there's a winner {winner} {winner's number}
//     if there's a tie: Tie {any of the two numbers}

// Constraints
//     1 < number < 9999999
//     there will always be a hidden number (no input such as 223)

// Sample tests
// Input
// 124
// 214

// Output
// Ronnie 124
let input = ["124", "214"];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result

let ronString = gets();
let ronNumber = Number(ronString);
let reanString = gets();
let reanNumber = Number(reanString);
let ronHiddenNumber = ``;
let reanHiddenNumber = ``;
let winner = ``;

// Ronnie 
for (let i = 0; i <= ronString.length-1; i ++) {              
    if (ronNumber % Number(ronString[i]) === 0 ) {        
        ronHiddenNumber += ronString[i];
    }              
} 
// Reanne  
for (let j = 0; j <= reanString.length-1; j++) {    
    if (reanNumber % Number(reanString[j]) === 0 ) {        
        reanHiddenNumber += reanString[j];
    }             
} 

if (Number(ronHiddenNumber) > Number(reanHiddenNumber)) {
    winner = `Ronnie`;
    print(`${winner} ${ronHiddenNumber}`)
} else if (Number(ronHiddenNumber) < Number(reanHiddenNumber)) {
    winner = `Reanne`;
    print(`${winner} ${reanHiddenNumber}`)
} else if (Number(ronHiddenNumber) == Number(reanHiddenNumber)) {
    winner = `Tie`;
    print(`${winner} ${reanHiddenNumber}`)
}