// how to output and read input in terminal
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.close();
});

rl.on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
})