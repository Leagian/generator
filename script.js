const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let slider = document.getElementById("slider-input");
let sliderValue = document.getElementById("slider-value");
sliderValue.textContent = slider.value;
slider.addEventListener("change", function () {
  sliderValue.textContent = slider.value;
});

let passwordResultOne = document.querySelector("#password-result-one");
let passwordResultTwo = document.querySelector("#password-result-two");

function GeneratorPasswords() {
  console.log("clicked");

  passwordResultOne.innerHTML = "";
  passwordResultTwo.innerHTML = "";

  for (let i = 0; i < slider.value; i++) {
    let randomCharOne = Math.floor(Math.random() * characters.length);
    passwordResultOne.innerHTML += characters[randomCharOne];

    let randomCharTwo = Math.floor(Math.random() * characters.length);
    passwordResultTwo.innerHTML += characters[randomCharTwo];
  }
}
