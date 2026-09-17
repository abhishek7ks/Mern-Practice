



const students = [
    { name: "Aman", marks: 40 },
    { name: "Neha", marks: 85 },
    { name: "Rohan", marks: 92 },
    { name: "Priya", marks: 45 }
];

let passedStudents = students.filter(marks => marks.marks > 50)
.map(students => students.name)

console.log(passedStudents);
