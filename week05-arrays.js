
const students = [
    {name:"Adwoa", score:77},
    {name:"Kwabena", score:92},
    {name:"Akua", score:59},
    {name:"Kweku", score:85},
    {name:"Ama", score:77},
    {name:"Kwesi", score:65},
    {name:"Adwoa", score:73}
];

function getNames(students) {
    return students.map(student => student.name);
}

function getPassing(students) {
    return students.filter(student => student.score >= 50);
}

function getTotal(students) {
    return students.reduce((sum, student) => sum + student.score, 0);
}

function getTopScorer(students) {
    if (students.length === 0) {
        return undefined;
    }

    let highest = students[0].score;

    for (const student of students) {
        if (student.score > highest) {
            highest = student.score;
        }
    }

    return students.find(student => student.score === highest);
}

function rank(students) {
    return students.slice().sort((a, b) => b.score - a.score);
}

// Display report

console.log("STUDENTS REPORT");

console.log("Students names:", getNames(students));

console.log("Students who passed:");
getPassing(students).forEach(student => {
    console.log(student.name + " - " + student.score);
});

console.log("Total Scores:", getTotal(students));

console.log("Top Scorer:");
console.log(getTopScorer(students).name + " - " + getTopScorer(students).score);

console.log("Rank:");
rank(students).forEach((student, index) => {
    console.log((index + 1) + ". " + student.name + " - " + student.score);
});
