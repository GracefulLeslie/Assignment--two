// "use strict";
const student = { name: "Chidi", details: { score: 50

 }
};
Object.freeze(student);

student.details.score = 90;

console.log(student);

//  const grades = [1, 2, 3];

//  grades.push(4);

//  console.log(grades);

// student = { name: "Bola", score: 70 };

