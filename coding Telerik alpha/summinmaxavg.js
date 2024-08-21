let input = ["1","55"];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// Use gets() to receive one line of input (the input line is always a string)
// Use "print" instead of "console.log" to print the result
// Additional info here: https://learn.telerikacademy.com/course/view.php?id=36&section=5


let N = +gets(); // + is to make a number
let min = 10000;
let max = -10000;
let sum = 0;
let average = 0;
let arr =[];
let i = 0;
let j = 0;

if (2 <= N && N <= 1000) {

    for (i = 1; i <= N; i++) { // Gets all of the elements in the input to put them in array 
        arr[i] = +gets();
        sum += arr[i];     
    }
    for (let k = 1; k <= N; k++) {  //Now that we have them in arr , we can use them in nested for;
        for (j = 2; j <= N; j++) { 
            if (arr[k] > arr[j]) {
                if (max < arr[k]) {
                    max = arr[k];
                }        
            } else {
                if (max < arr[j]) {
                    max = arr[j];
                }             
            }
            if (arr[k] < arr[j]) {            
                if (min > arr[k]) {
                    min = arr[k];
                }        
            } else {            
                if (min > arr[j]) {
                    min = arr[j];
                }             
            }
        }
    }

} else if (N === 1) {
    min = max = sum = +gets();
}


average = sum / N;

print (`min=${min.toFixed(2)}`);
print (`max=${max.toFixed(2)}`);
print (`sum=${sum.toFixed(2)}`);
print (`avg=${average.toFixed(2)}`);

    
