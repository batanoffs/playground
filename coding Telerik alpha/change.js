let input = ["1.92","5"]; 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
// Use the coins of 1 lev, 50, 20, 10, 5, 2 and 1 stotinki.

let price = +gets();
let paidSum = +gets();
let change = (paidSum - price)*100;
let command = 0;


if (price < paidSum && price > 0 || paidSum > 0) {
    
    command = Math.floor(change/100);
    if (command > 0) {
    print(`${command} x 1 lev`);
    }
    change -=command*100;

    command = Math.floor(change/50);
    if (command > 0) {
    print(`${command} x 50 stotinki`);
    }
    change -=command*50;

    command = Math.floor(change/20);
    if (command > 0) {
    print(`${command} x 20 stotinki`);
    }
    change -=command*20;

    command = Math.floor(change/10);
    if (command > 0) {
    print(`${command} x 10 stotinki`);
    }
    change -=command*10;

    command = Math.floor(change/5);
    if (command > 0) {
    print(`${command} x 5 stotinki`);
    }
    change -=command*5;

    command = Math.floor(change/2);
    if (command > 0) {
    print(`${command} x 2 stotinki`);
    }
    change -=command*2;

    command = Math.floor(change/1);
    if (command > 0) {
    print(`${command} x 1 stotinka`);
    }
    change -=command;

}


