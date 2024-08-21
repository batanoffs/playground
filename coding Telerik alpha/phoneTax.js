let input = ["31","115"];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

//A phone bill plan includes 1 hour of free calls and 20 text messages for 12.00 levas
//Each additional minute costs 0.10 levas and each additional message costs 0.06 levas
//Also, any additional minutes/text messages are subject to 20% sales tax. 

//Write a program that calculates the additional charge for text, the additional charge for minutes,
//and the sales tax charge for both. Also, display the total amount paid.

// Output
//     1st line - number of additional messages and additional amount paid
//     2nd line - number of additional minutes and additional amount paid
//     3rd line - amount paid in taxes
//     4th line - total bill


let totalSms = +gets();
let totalMin = +gets();
let addSms = 0;
let addMin = 0;
let addSmsCharge = 0;
let addMinCharge = 0;
let salesTax = 0;
let totalBill = 0;


if (totalSms > 20) {
    addSmsCharge = (totalSms - 20) * 0.06;
    addSms = totalSms - 20;
} 
if (totalMin > 60) {
    addMinCharge = (totalMin - 60) * 0.1;
    addMin = totalMin - 60;
}

salesTax = (addSmsCharge + addMinCharge) * 0.2;
totalBill = 12 + salesTax + addSmsCharge + addMinCharge;

print(`${addSms} additional messages for ${addSmsCharge.toFixed(2)} levas`);
print(`${addMin} additional minutes for ${addMinCharge.toFixed(2)} levas`);
print(`${salesTax.toFixed(2)} additional taxes`);
print(`${totalBill.toFixed(2)} total bill`);


