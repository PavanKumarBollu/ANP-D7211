user = {
  name: "Pavan",
  age: 30,
  greet: function () {
    return "Hello, " + this.name + "!";
  },
  gender: "male",
  isLoggedIn: true,
};
console.log(user);
//  storing the user object in localStorage
localStorage.setItem("user", JSON.stringify(user));

user = null;
console.log(user);
// getting the user object from localStorage

let storedUser = localStorage.getItem("user");
userData = JSON.parse(storedUser);
console.log(user);

if (userData.isLoggedIn) {
  document.getElementById("root").innerHTML =
    `<h1> Hello, ${userData.name}</h1>`;
}
