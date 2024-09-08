function countFruitsInHouse(s, t, a, b, apples, oranges) {
    const fruitsInHouse = [0, 0];

    const checkFruit = (fruit, treePosition, houseStart, houseEnd) => {
        const fallDistance = fruit + treePosition;
        if (fallDistance >= houseStart && fallDistance <= houseEnd) {
            fruitsInHouse[treePosition === a ? 0 : 1]++;
        }
    };

    for (const fruit of apples) {
        checkFruit(fruit, a, s, t);
    }

    for (const fruit of oranges) {
        checkFruit(fruit, b, s, t);
    }

    return console.log(fruitsInHouse.join('\n'));
}

countFruitsInHouse(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

