let pass = document.getElementById("pass");
let repass = document.getElementById("repass");
let match = document.getElementById("match");
console.log(match);

repass.addEventListener("keyup", function () {
  if (pass.value == repass.value) {
    match.style.color = "green";
    match.textContent = "Password matched";
    console.log(match);
  } else {
    match.style.color = "red";
    match.textContent = "Passwords don't match";
  }
});
