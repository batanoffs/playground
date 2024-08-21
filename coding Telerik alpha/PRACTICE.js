let input = ["E,T,O,P,A,H,K,X,C,B,M",
"5",
"CH3604AC",
"CEOOO7TO",
"CC4140CC",
"HO1CCCBB",
"EK9ETTBE"];
 let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// A valid license plate is one that:
//     Has a letter from the allowed letters at position 1
//     Has a letter from the allowed letters at position 2
//     Has a number at position 3
//     Has a number at position 4
//     Has a number at position 5
//     Has a number at position 6
//     Has a letter from the allowed letters at position 7
//     Has a letter from the allowed letters at position 8


let allowedLetters = gets();
let numberLicensePlates = +gets();
let currentPlate = ``;
let isValid = false;

for(let i = 2; i <= numberLicensePlates; i++) {
    currentPlate = currentPlate[i] = gets();  
        for (let j = 0; j<=1; j++) {            
            for(let k = 0; k <= allowedLetters.length-1; k++) {
                if (currentPlate[j] === allowedLetters[k]) {
                    isValid = true;
                } else {
                    isValid = false;
                }
            }
        }

        for (let j = 6; j<=7; j++) {            
            for(let k = 0; k <= allowedLetters.length-1; k++) {
                if (currentPlate[j] === allowedLetters[k]) {
                    isValid = true;
                } else {
                    isValid = false;
                }
            }
        }

        for (let j = 2; j<=5; j++) {            
            let num = parseInt(currentPlate[j], 10);

            if (isNaN(num)) {    
                if (num = 0) {
                    isValid = true;
                } else {        
                isValid = false;
                return;  
                }                              
            } else {
                isValid = true;
            }
            
        }

    if (isValid = true) {
        print(currentPlate);
    }
        
}

