// READ WRITE ASYNC 

const { log } = require('console');
let fs = require('fs'); //file system

fs.readFile('./files/input.txt', 'utf-8', (err, data) => { //ASYNC 
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

log("Reading file...");