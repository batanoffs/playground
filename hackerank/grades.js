function gradingStudents(grades) {
    // Write your code here
    // 0 <= grade <= 100
    // failGrade < 40
    // rounding
    const roundedGrades = [];

    for (let grade of grades) {
        if (grade > 37) {
            let dif = 0;

            const token = grade % 10;

            if (0 <= token && token <= 5) {
                dif = 5 - token;
            }
            if (5 < token && token < 10) {
                dif = 10 - token;
            }

            if (dif < 3) grade += dif;

            roundedGrades.push(grade);
        } else {
            roundedGrades.push(grade);
        }
    }

    return roundedGrades;
}

gradingStudents([73, 67, 38, 33]);
