function isNumber (input) {
 
let currentPlate = input;
let isValid = false;

for (let j = 2; j<=5; j++) {            
    let num = currentPlate[j];
    console.log(num);
    console.log(isNaN(num));

    if (isNaN(num)) {
        isValid = false;
        return;                
    } else {
        isValid = true;
    }
    
}

if (isValid = true) {
console.log(currentPlate);
}

}

isNumber("HO1CCCBB");