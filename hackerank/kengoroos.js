function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let startPosition1 = x1;
    let startPosition2 = x2;

    const firstJump1 = x1 + v1;
    const firstJump2 = x2 + v2;
    const startDistance = Math.abs(firstJump1 - firstJump2);

    if (firstJump1 === firstJump2) return "YES";
    if (firstJump1 > firstJump2 && v1 >= v2) return "NO";
    if (firstJump2 > firstJump1 && v2 >= v1) return "NO";

    const calcPosition = (position1, position2, speed1, speed2) => {
        while (position1 !== position2) {
            position1 += speed1;
            position2 += speed2;
            const distanceBetween = Math.abs(position1 - position2);
            if (startDistance < distanceBetween) return "NO";
            if (position1 === position2) return "YES";
            return calcPosition(position1, position2, speed1, speed2);
        }

        return "NO";
    };
    const check = calcPosition(startPosition1, startPosition2, v1, v2);
    return check;
}

kangaroo(22, 23, 32, 20);
