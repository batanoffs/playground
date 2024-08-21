const { log } = require('console');

fs = require('fs');

fs.readFile('./files/start.txt', 'utf-8', (err1, data1) => {
    if (err1) {
        console.log(err1);
    } else {
        console.log(data1);
        fs.readFile(`./files/${data1}.txt`, 'utf-8', (err2, data2) => {
            if (err2) {
                console.log(err2);
            } else {
                console.log(data2);
                fs.readFile('./files/append.txt', 'utf-8', (err3, data3) => {
                    if (err3) {
                        console.log(err3);
                    } else {
                        console.log(data3);
                        fs.writeFile('./files/output.txt', `${data2}\n${data3}`, (err4) => {
                            if (err4) {
                                console.log(err4);
                            } else {
                                console.log("Done writing file");
                            }
                        })
                    }
                })
            }
        })
    }
})
log("Reading file...");