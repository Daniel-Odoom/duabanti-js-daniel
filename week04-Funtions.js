
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let total = 0;

    for (const n of numbers) {
        total += n;
    }

    return total / numbers.length;
}

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 50) return "D";
    return "F";
}

function formatCedis(amount) {
    const formatted = Number(amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    return `GHC ${formatted}`;
}

function isValidScore(score) {
    return typeof score === 'number' &&
        !isNaN(score) &&
        score >= 0 &&
        score <= 100;
}

function addStudent(name, score) {
    return {
        name: name,
        score: score,
        grade: getGrade(score)
    };
}

console.log(calculateAverage([72, 45, 91]));
console.log(getGrade(85));
console.log(formatCedis(1250));
console.log(isValidScore(85));
console.log(addStudent("Daniel", 85));

const args = process.argv.slice(2);

const scores = args.length > 0
    ? args.map(Number)
    : [72, 45, 91];

if (!scores.every(isValidScore)) {
    console.log("Invalid scores. Scores must be 0-100.");
} else {
    const average = calculateAverage(scores);
    const grade = getGrade(average);

    const student = {
        name: "Daniel Odoom",
        scores: scores,
        average: average,
        grade: grade
    };

    console.log(`Scores: ${student.scores.join(", ")}`);
    console.log(`Average: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
    console.log(`Student: ${JSON.stringify(student)}`);
    console.log(`Example Fee: ${formatCedis(1250)}`);
}

