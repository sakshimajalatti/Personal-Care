// PAGE 0 → PAGE 1 (USERNAME → AGE)
function goToAge() {
  const username = document.getElementById("username").value.trim();

  if (username === "") {
    alert("Please enter a username");
    return;
  }

  localStorage.setItem("username", username);

  document.getElementById("page0").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");
}

// BACK BUTTON (AGE → USERNAME)
function goBackToUsername() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page0").classList.remove("hidden");
}

// FINISH → LANDING PAGE
function finish() {
  const age = document.getElementById("age").value;

  if (age === "") {
    alert("Please enter your age");
    return;
  }

  localStorage.setItem("age", age);

  window.location.href = "home.html"; // landing page
}

// SHOW NAME ON OTHER PAGES
document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("username");
  const userElement = document.getElementById("userName");

  if (name && userElement) {
    userElement.textContent = `Hi, ${name}`;
  }
});

// LOGOUT
function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}
