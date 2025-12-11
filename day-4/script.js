function checkPasswordStrength(password) {
  const specialChars = "!@#$%^&*";
  let hasDigit = false;
  let hasSpecial = false;
  for (let ch of password) {
    if (ch >= "0" && ch <= "9") hasDigit = true;
    if (specialChars.includes(ch)) hasSpecial = true;
    if (hasDigit && hasSpecial) break;
  }
  const isLong = password.length >= 8;
  if (isLong && hasDigit && hasSpecial) return "Strong";
  if (isLong && (hasDigit || hasSpecial)) return "Medium";
  return "Weak";
}

const passwordInput = document.getElementById("password");
const output = document.getElementById("output");
const checkButton = document.getElementById("checkBtn");
const showToggle = document.getElementById("toggle");

function updateStrength(password) {
  if (!password) {
    output.textContent = "";
    output.className = "result";
    return;
  }
  const level = checkPasswordStrength(password);
  output.textContent = level;
  output.className = "result " + (level === "Strong" ? "strong" : level === "Medium" ? "medium" : "weak");
}

passwordInput.addEventListener("input", (e) => updateStrength(e.target.value));
checkButton.addEventListener("click", () => updateStrength(passwordInput.value));
showToggle.addEventListener("change", (e) => {
  passwordInput.type = e.target.checked ? "text" : "password";
});