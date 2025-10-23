const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    }
];

for (let i = 0; i < studentList.length; i++) {
    for (let j = 0; j < studentList[i].scores.length; j++) {
        studentList[i].scores[j] += 5;
    }
}



for (let i = 0; i < studentList.length; i++) {
    const average = studentList[i].scores.reduce((sum, score) => sum + score, 0) / studentList[i].scores.length;
    studentList[i].scores.push(average);
}


for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    const fullName = `${student.lastName}, ${student.firstName}`;
    const scoresStr = student.scores.join(",");
    
    console.log(`Full name (last, first): ${fullName}`);
    console.log(`Updated scores are: ${scoresStr}`);
}