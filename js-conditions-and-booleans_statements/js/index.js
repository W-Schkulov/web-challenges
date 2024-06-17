// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd numer");
}

// Part 3: Hotdogs
const numberOfHotdogs = 5000;
let pricePerHotdog;

if (numberOfHotdogs < 5) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs < 1000000) {
  pricePerHotdog = 1;
} else {
  pricePerHotdog = 0.1;
}

console.log(pricePerHotdog);

// Part 4: Daytime
const currentHour = 15;
const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";
console.log(statement);

// Part 5: Greetings
const name = "Archibald";
const coachName = "Archibald";

const greeting = name === coachName ? "Hello Coach!" : `Hello!`;
console.log(greeting);
