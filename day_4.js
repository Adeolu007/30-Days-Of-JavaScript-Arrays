//
let userAge = prompt("Enter your age");

if (userAge >= 18) {
  console.log(`You are old enough to drive`);
} else if (userAge < 18) {
  console.log(`You are left with ${18 - userAge} years to drive.`);
}
//

let myAge = prompt("Enter my age");
let yourAge = prompt("Enter your age");

if (myAge > yourAge) {
  console.log(`You are ${myAge - yourAge} years younger than me.`);
} else if (yourAge > myAge) {
  console.log(`You are ${yourAge - myAge} years older than me.`);
} else {
  console.log("We are agemates");
}

//

let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (b > a) {
  console.log(`${b} is greater than ${a}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

//

let number = prompt("Enter a number");

if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number.`);
}

number % 2 === 0
  ? console.log(`${number} is an even number`)
  : console.log(`${number} is an odd number.`);

//Exercises: Level 2

let scores = Math.trunc(Math.random() * 100 + 1);

if (scores >= 80 && scores <= 100) {
  console.log("A");
} else if (scores >= 70 && scores <= 79) {
  console.log("B");
} else if (scores >= 60 && scores <= 69) {
  console.log("C");
} else if (scores >= 50 && scores <= 59) {
  console.log("D");
} else if (scores >= 0 && scores <= 49) {
  console.log("F");
}

//

let season = prompt("Enter your season");
const autumn = ["September", "October", "November"];
const winter = ["December", "January", "February"];
const spring = ["March", "April", "May"];
const summer = ["June", "July", "August"];

if (autumn.includes(season)) {
  console.log("You chose Autumn");
} else if (winter.includes(season)) {
  console.log("You chose Winter");
} else if (spring.includes(season)) {
  console.log("You chose Spring");
} else if (summer.includes(season)) {
  console.log("You chose Summer");
}

//

const day = 2;

switch (day) {
  case 1:
    console.log(`Sunday is a weekend.`);
    break;
  case 2:
    console.log(`Monday is a working day.`);
    break;
  case 3:
    console.log(`Tuesday is a working day.`);
    break;
  case 4:
    console.log(`Wednesday is a working day.`);
    break;
  case 5:
    console.log(`Thursday is a working day.`);
    break;
  case 6:
    console.log(`Friday is a working day.`);
    break;
  case 7:
    console.log(`Saturday is a weekend.`);
    break;
}
//

// Exercises: Level 3

let ans = prompt("Enter a month");
const twentyEight = ["February"];
const thirtyOne = [
  "January",
  "March",
  "May",
  "July",
  "August",
  "October",
  "December",
];
const thirty = ["April", "June", "September", "November"];

const leapYear = prompt("Are you in a leap year");

let ansLeap = leapYear.toLowerCase();

let newAns = ans.charAt(0).toUpperCase() + ans.slice(1);

if (ansLeap == "yes") {
  if (newAns == "February") {
    console.log(`${newAns} has 29 days`);
  } else if (thirtyOne.includes(newAns)) {
    console.log(`${newAns} has 31 days`);
  } else if (thirty.includes(newAns)) {
    console.log(`${newAns} has 28 days`);
  }
} else {
  if (twentyEight.includes(newAns)) {
    console.log(`${newAns} has 28 days`);
  } else if (thirtyOne.includes(newAns)) {
    console.log(`${newAns} has 31 days`);
  } else if (thirty.includes(newAns)) {
    console.log(`${newAns} has 28 days`);
  }
}
