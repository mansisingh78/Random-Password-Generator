const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~{}[]<>?-=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(math.random() * upperCase.length)];
  password += lowerCase[Math.floor(math.random() * lowerCase.length)];

  password += number[Math.floor(math.random() * number.length)];

  password += symbol[Math.floor(math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.Selecte();
  document.execCommand("copy");
}
