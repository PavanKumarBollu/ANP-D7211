"use strict";

/*
========================================
1. APPLICATION DATA
========================================
*/

const students = [];

/*
========================================
2. DOM ELEMENTS
========================================
*/

const studentForm = document.querySelector("#studentForm");

const studentNameInput = document.querySelector("#studentName");

const mathsInput = document.querySelector("#maths");

const scienceInput = document.querySelector("#science");

const englishInput = document.querySelector("#english");

const message = document.querySelector("#message");

const studentList = document.querySelector("#studentList");

const studentCount = document.querySelector("#studentCount");

/*
========================================
3. CALCULATE TOTAL
========================================
*/

function calculateTotal(maths, science, english) {
  return maths + science + english;
}

/*
========================================
4. CALCULATE AVERAGE
========================================
*/

function calculateAverage(total) {
  return total / 3;
}

/*
========================================
5. CHECK RESULT
========================================
*/

function checkResult(average) {
  if (average >= 35) {
    return "Pass";
  } else {
    return "Fail";
  }
}

/*
========================================
6. CALCULATE GRADE
========================================
*/

function calculateGrade(average) {
  if (average >= 90) {
    return "A+";
  } else if (average >= 80) {
    return "A";
  } else if (average >= 70) {
    return "B";
  } else if (average >= 60) {
    return "C";
  } else if (average >= 50) {
    return "D";
  } else if (average >= 35) {
    return "E";
  } else {
    return "F";
  }
}

/*
========================================
7. CREATE STUDENT OBJECT
========================================
*/

function createStudent(name, maths, science, english) {
  const total = calculateTotal(maths, science, english);

  const average = calculateAverage(total);

  const result = checkResult(average);

  const grade = calculateGrade(average);

  const student = {
    id: students.length + 1,

    name: name,

    maths: maths,

    science: science,

    english: english,

    total: total,

    average: average,

    result: result,

    grade: grade,
  };

  return student;
}

/*
========================================
8. VALIDATE FORM DATA
========================================
*/

function validateStudent(name, maths, science, english) {
  if (name.trim() === "") {
    return "Please enter student name.";
  }

  if (maths < 0 || maths > 100) {
    return "Maths marks must be between 0 and 100.";
  }

  if (science < 0 || science > 100) {
    return "Science marks must be between 0 and 100.";
  }

  if (english < 0 || english > 100) {
    return "English marks must be between 0 and 100.";
  }

  return "";
}

/*
========================================
9. DISPLAY MESSAGE
========================================
*/

function showMessage(text) {
  message.textContent = text;
}

/*
========================================
10. CLEAR FORM
========================================
*/

function clearForm() {
  studentForm.reset();

  studentNameInput.focus();
}

/*
========================================
11. UPDATE STUDENT COUNT
========================================
*/

function updateStudentCount() {
  const count = students.length;

  if (count === 1) {
    studentCount.textContent = "1 Student";
  } else {
    studentCount.textContent = `${count} Students`;
  }
}

/*
========================================
12. DISPLAY STUDENTS
========================================
*/

function displayStudents() {
  /*
    Remove old student cards
    */

  studentList.innerHTML = "";

  /*
    Check if there are no students
    */

  if (students.length === 0) {
    studentList.innerHTML = `
            <p class="empty-message">
                No students added yet.
            </p>
        `;

    updateStudentCount();

    return;
  }

  /*
    Loop through students
    */

  students.forEach(function (student) {
    /*
        Create a new div
        */

    const studentCard = document.createElement("div");

    /*
        Add CSS class
        */

    studentCard.classList.add("student-card");

    /*
        Add student information
        */

    studentCard.innerHTML = `
            <h3>
                ${student.id}. ${student.name}
            </h3>

            <p>
                Maths: ${student.maths}
            </p>

            <p>
                Science: ${student.science}
            </p>

            <p>
                English: ${student.english}
            </p>

            <p>
                Total: ${student.total}
            </p>

            <p>
                Average: ${student.average.toFixed(2)}
            </p>

            <p>
                Grade: ${student.grade}
            </p>

            <p class="${student.result === "Pass" ? "pass" : "fail"} ">
                Result: ${student.result} </p>`;

    /*
        Add card to webpage
        */

    studentList.appendChild(studentCard);
  });

  /*
    Update count
    */

  updateStudentCount();
}

/*
========================================
13. FORM SUBMISSION
========================================
*/

studentForm.addEventListener("submit", function (event) {
  /*
        Prevent page refresh
        */

  event.preventDefault();

  /*
        Get values from form
        */

  const name = studentNameInput.value.trim();

  const maths = Number(mathsInput.value);

  const science = Number(scienceInput.value);

  const english = Number(englishInput.value);

  /*
        Validate input
        */

  const validationMessage = validateStudent(name, maths, science, english);

  if (validationMessage !== "") {
    showMessage(validationMessage);

    return;
  }

  /*
        Create student
        */

  const student = createStudent(name, maths, science, english);

  /*
        Add student to array
        */

  students.push(student);

  /*
        Display students
        */

  displayStudents();

  /*
        Show success message
        */

  showMessage(`${student.name} added successfully.`);

  /*
        Clear form
        */

  clearForm();
});

/*
========================================
14. INITIAL DISPLAY
========================================
*/

displayStudents();
