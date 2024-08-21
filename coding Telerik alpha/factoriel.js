let input = ["4","3"];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5


let n = +gets(); 
let x = +gets(); 
let arr = [];
let S = 1;
let factorial = 1;

for (let i = 1; i <= n; i ++){
          
    factorial = factorial * i;
    arr[i] = factorial;    
    S = S + factorial/Math.pow(x,i);
    
}

print(S.toFixed(5));

// Use only one loop. Print the result with 5 digits after the decimal point.
// Each element is calculated as follows: (previous_element) * i / xi