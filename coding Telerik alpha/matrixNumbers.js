let input = ["4"];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5


let n = +gets();

let line2 = ``;

for (let i = 1 ; i <= n; i++) {    
          
    for (let j = i; j <= n+(i-1); j++) {    
        line2 += ` ${j}`;           
    }

    line2 = line2 + "\n";   
    
}
print(line2);
