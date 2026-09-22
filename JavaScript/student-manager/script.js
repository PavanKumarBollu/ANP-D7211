console.log("Student Resulte Manager Started");

// let studentName = "Rahul"; // store the value as String

// let maths = 85; // store the value as number

// let science = 75; // store the value as number

// let english = 90; // store the value as number

// const passingMarks = 35;
// // use let -> value can Change
// // use const -> value shouldn't change

// maths = 80;
// // passingMarks = 40; // error

function calculateTotal(maths, science, english) {
  let total = maths + science + english;
  return total;
}

// let totalMarks = calculateTotal(80, 75, 90);
// console.log(totalMarks); //245

// // function calculateAverage(total) {
// //   let average = total / 3;
// //   return average;
// // }

// let totalMarks1 = calculateTotal(80, 75, 90); // 245

// let average = calculateAverage(totalMarks1); //81.___

// console.log(totalMarks1);
// console.log(average);

function calculateAverage(total) {
  return total / 3;
}

function checkResult(average) {
  if (average >= 35) {
    return "Pass";
  } else {
    return "Fail";
  }
}
// console.log(checkResult(30));

function calculateGrade(average) {
  if (average >= 90) return "A+";
  else if (average >= 80) return "A";
  else if (average >= 70) return "B";
  else if (average >= 60) return "C";
  else if (average >= 50) return "D";
  else if (average >= 35) return "E";
  else return "F";
}
// console.log(calculateGrade(92));
// console.log(calculateGrade(75));
// console.log(calculateGrade(30));

const student = {
  name: "Rahul",
  maths: 80,
  science: 75,
  english: 90,
};

console.log(student.name);

console.log(student.maths);

console.log(student.science);

console.log(student.english);

const totalC = calculateTotal(student.maths, student.science, student.english);
const averageC = calculateAverage(totalC);
const resultC = checkResult(averageC);
const gradeC = calculateGrade(averageC);

const student1 = {
  name: "Rahul",
  maths: 80,
  science: 75,
  english: 90,
  total: totalC,
  average: averageC,
  result: resultC,
  grade: gradeC,
};

console.log(student1);

const students = [];
students.push(student);
students.push(student1);

const student2 = {
  name: "Priya",
  maths: 90,
  science: 85,
  english: 95,
};

students.push(student2);
console.log(students);

// helper function
function createStudent(name, maths, science, english) {
  const total = calculateTotal(maths, science, english);
  const average = calculateAverage(total);
  const result = checkResult(average);
  const grade = calculateGrade(average);
  return {
    name: name,
    maths: maths,
    science: science,
    english: english,
    total: total,
    average: average,
    result: result,
    grade: grade,
  };
}

const student4 = createStudent("Rahul", 80, 75, 90);

const student5 = createStudent("Priya", 90, 85, 95);

const student6 = createStudent("Amit", 30, 40, 25);

students.push(student4);
students.push(student5);
students.push(student6);
console.log(students);
