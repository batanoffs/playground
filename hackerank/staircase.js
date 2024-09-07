function staircase(n) {
    // Write your code here
    let result = []
    const buildLine = (number) => {
        let line = '';
        
        for(let i = 0; i < n-number; i ++){
            line += " ";
        }

        for(let i = 0; i < number; i ++){
            line += "#";
        }

        return line;
    }
    
    for(let j = 1; j <= n; j ++){
        result.push(buildLine(j))
    }
    
    return console.log(result.join('\n'));
}

staircase(6);