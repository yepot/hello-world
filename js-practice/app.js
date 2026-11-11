console.log("JS is connected!");

// Lab 1: Variables and conditionals
const userName = "Eunseo";
let score = 0;
score = score + 10;
console.log(userName, score);

const temperature = 25;
if (temperature > 30) {
  console.log("Hot");
} else if (temperature > 20) {
  console.log("Nice");
} else {
  console.log("Cold");
}

// Lab 2: Functions and loops
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Eunseo"));

const add = (a, b) => a + b;
console.log(add(3, 7));

for (let i = 1; i <= 5; i++) {
  console.log("Number " + i);
}

const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Lab 3 and Challenge: Click counter
const title = document.querySelector("#title");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");
const resetButton = document.querySelector("#reset");

const initialTitle = title.textContent;
const initialTitleColor = title.style.color;
let clicks = 0;
output.textContent = "Clicks: " + clicks;

button.addEventListener("click", () => {
  clicks = clicks + 1;
  title.textContent = "You clicked!";
  title.style.color = "#eab308";
  output.textContent = "Clicks: " + clicks;
});

resetButton.addEventListener("click", () => {
  clicks = 0;
  output.textContent = "Clicks: " + clicks;
  title.textContent = initialTitle;
  title.style.color = initialTitleColor;
});
