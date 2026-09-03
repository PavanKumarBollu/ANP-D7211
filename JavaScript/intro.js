// // console.log("External JavaScript");

// "Pavan";

// let Name = "Pavan";
// console.log(Name); // Pavan

// Name = 25;
// console.log(Name); // 25

// const email = "bollu.kumar@anudip.org";
// console.log(email); // bollu.kumar@anudip.org

// email = "Pavan@anudip.org";
// console.log(email); // TypeError: Assignment to constant variable.

// conditional Statements

// let cibilScore = 699;

// if (cibilScore >= 750) {
//   // True Or False
//   // this is a true block
//   console.log(cibilScore >= 750); // true
//   console.log("You are eligible for a loan");
// } else {
//   // this is a false block
//   console.log(cibilScore >= 750);
//   console.log("You are not eligible for a loan");
// }

// let userRole = "joseeker";
// if (userRole === "jobseeker") {
//   console.log("You are a jobseeker");
// } else {
//   console.log("You are not a jobseeker");
// }

// truthy and falsy values

// list of falsy values which always produce false in conditional statements
// 1. false 2. 0, 3. -0, 4. 0n, 5 null, 6 undefined, 7. NaN, 8. "", '', ``
// if ("") {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let Pavan;
// console.log(Pavan); // undefined
// if (Pavan) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log("pavan" / 2);
// if ("Pavan" / 2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// if ({} && []) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Functions

// there are two things are there when it comes to using the functions
// 1. Function Declaration(create the functions)
// 2. Function Invocation(call the functions)

// 1. Function Declaration syntax
//  function functionName() {
//     // function body
//     // code to be executed
//   }
//  2. Function Invocation syntax
//  functionName(); // calling the function

// function greet() {
//   console.log("Hello, Welcome to Anudip Foundation");
// }

// greet(); // Hello, Welcome to Anudip Foundation
// greet(); // Hello, Welcome to Anudip Foundation

// let userName = "Pavan";
// let userName1 = "Kumar";

// function openProfile(uName) {
//   console.log("Opening profile for " + uName);
// }

// openProfile(userName); // Opening profile for Pavan
// openProfile(userName1); // Opening profile for Kumar

// Arrow Funtions
// given next level syntax for writing the functions in a short way

// const greet = () => {
//   console.log("Hello, Welcome to Anudip Foundation");
// };

// () => {//code for the arrow Functoion}

// const openProfile = (uName) => {
//   console.log("Opening profile for " + uName);
// };
// the above mentioned arrow function will be converted as the following function at runtime
//

// function openProfile(uName) {
//   console.log("Opening profile for " + uName);
// }

// openProfile("Pavan"); // Opening profile for Pavan
// openProfile("Kumar"); // Opening profile for Kumar
// openProfile("Anudip"); // Opening profile for Anudip
// openProfile("Foundation"); // Opening profile for Foundation

// Arrays, Array Methods
// if we want to store multiple values under single variable and use them
// we can use the concept of Arrays in javascript
// syntax:
//  const variabelName = [val1, val2, val3]
// here the values can be anytin like text numbers or true/ flase......

const followers = [
  "Pavan", //0
  "Kumar", //1
  "Rohith", //2
  "Vasnathi", //3
  "Jash",
  "Guna",
  "Kavya",
  "Anjali",
  "Ganesh",
  "Shafi",
  "chaitu",
  "Shivani",
  "Premitha", //12
];

console.log(followers);
console.log(followers[1]); //Kumar
console.log(followers.length);
followers.push("Dinesh");
console.log(followers);
console.log(followers.length);

followers[0] = "Pawan";
console.log(followers);

followers.pop();
console.log(followers);

followers.unshift("Dinesh");
console.log(followers);
followers.shift();
console.log(followers);

// followers.forEach((follower) => {
//   console.log(follower);
// });

// objects, Object Methods

// Loops
