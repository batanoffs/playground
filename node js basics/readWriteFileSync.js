// READ WRITE TO A FILE SYNCRONOUSLY

const fs = require('fs'); //file system

const textData = fs.readFileSync('./files/input.txt', 'utf-8'); //sync reading 


console.log(textData);
let message = "Data red from input.txt: " + textData + "\n" + new Date();

const outputData = fs.writeFileSync('./files/output.txt', message);

console.log(outputData);