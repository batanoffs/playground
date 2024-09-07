function diagonalDifference(arr) {
    // Write your code here
    console.log('input arr', arr)
    const matrixSize = arr.shift();
    console.log('matrixSize arr', matrixSize)
    
    const primaryDiagonal = [];
    const secondaryDiagonal = [];
    
    for(let i=0; i < matrixSize; i++) {
        let row = arr[i].join(' ');
        let primaryValue = row[i];
        let secondaryValue = row[matrixSize - 1 - i];
        
        console.log(primaryValue);
        console.log(secondaryValue);
        
        primaryDiagonal.push(primaryValue);
        secondaryDiagonal.push(secondaryValue);
    }
    const primarySum = primaryDiagonal.reduce((a,b) => Number(a) + Number(b), 0);
    const secondarySum = secondaryDiagonal.reduce((a,b) =>Number(a) + Number(b), 0);
    return Math.abs(primarySum - secondarySum)
}

diagonalDifference([3, [11, 2, 4], [4, 5, 6], [10, 8, -12]]);
