//probelm statement : provide the functionalities to the application
// 1.ui manipulation
// 3. routing / page navigation

// UI Manipulation
function get(id) {
  return document.getElementById(id);
}
// console.log(get("nav-login"));
// console.log(get("nav-register"));
function getAll(selector) {
  return document.querySelectorAll(selector);
}
// console.log(getAll(".page"));

function setText(element, value) {
  if (!element) return;

  element.textContent = value;
}

function show(element, visible = true) {
  if (!element) return;
  element.classList.toggle("hidden", !visible);
}
function setValue(element, value) {
  if (!element) return;
  element.value = value ?? "";
}
function valueOf(element) {
  return element?.value?.trim() || "";
}
// 3. routing / page navigation

const pages = document.querySelectorAll(".page");
console.log(pages);

// get the current url in the serach box and give the url
function getRoute() {
  return location.hash.replace(/^#/, "") || "/";
}

function showPage(pageName) {
  pages.forEach((page) => {
    show(page, page.id === "page-" + pageName);
  });
}

async function render() {
  const route = getRoute();

  if (route === "/" || route === "/home") {
    showPage("home");
    return;
  }
  if (route === "/login") {
    showPage("login");
    return;
  }
  if (route === "/register") {
    showPage("register");
    return;
  }
  if (route === "/job-detail") {
    showPage("job-detail");
    return;
  }
  if (route === "/my-applications") {
    showPage("my-applications");
    return;
  }
  if (route === "/post-job") {
    showPage("post-job");
    return;
  }
  if (route === "/my-jobs") {
    showPage("my-jobs");
    return;
  }
  if (route === "/applicants") {
    showPage("applicants");
    return;
  }
  if (route === "/dashboard") {
    showPage("dashboard");
    return;
  }
  if (route === "/admin-users") {
    showPage("admin-users");
    return;
  }
  if (route === "/error") {
    showPage("error");
    return;
  }
}

window.addEventListener("hashchange", render);
