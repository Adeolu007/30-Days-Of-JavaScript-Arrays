function fullName() {
  return `Odunuyi Adeolu`;
}

function fullName(first, second) {
  return `${first} ${second}`;
}

function addNumbers(a, b) {
  let sum = a + b;
  return sum;
}

function areaOfRectangle(length, width) {
  let area = length * width;
  return area;
}

function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}

function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}

function areaOfCircle(r, pi = 3.142) {
  let area = pi * r * r;
  return area;
}

function circumOfCircle(r, pi = 3.142) {
  let circumference = 2 * pi * r;
  return circumference;
}

function density(mass, volume) {
  let density = mass / volume;
  return density;
}

function speed(distance, time) {
  let speed = distance / time;
  return speed;
}

function weight(mass, gravity) {
  let weight = mass * gravity;
  return weight;
}

function convertCelsiusToFahrenheit(oC) {
  let fahrenheit = (oC * 9) / 5 + 32;
  return fahrenheit;
}

function BodyMassIndex(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    console.log(`BMI is less than 18.5, you are underweight`);
  } else if ((bmi = 18.5 && bmi <= 24.9)) {
    console.log(`BMI is 18.5 to 24.9, you are Normal weight`);
  } else if ((bmi = 25 && bmi <= 29.9)) {
    console.log(`BMI is 25 to 29.9, Overweight`);
  } else if (bmi >= 30) {
    console.log(`BMI is 30 or more, Obese`);
  }
}

//

// const autumn = ["September", "October", "November"];
// const winter = ["December", "January", "February"];
// const spring = ["March", "April", "May"];
// const summer = ["June", "July", "August"];

// console.log(summer.includes('August'))

// function checkSeason(season) {

//  if (autumn.includes(season)) {
//     console.log("You chose Autumn");
//   } else if (winter.includes(season)) {
//     console.log("You chose Winter");
//   } else if (spring.includes(season)) {
//     console.log("You chose Spring");
//   } else if (summer.includes(season)) {
//     console.log("You chose Summer"); }
// }

// checkSeason('may');

// Javascript program to print the season
// name based on the month number

function findSeason(M) {
  switch (M) {
    case "December":
    case "January":
    case "Feburary":
      console.log("Winter");
      break;
    case "March":
    case "April":
    case "May":
      console.log("SPRING");
      break;
    case "June":
    case "July":
    case "August":
      console.log("SUMMER");
      break;
    case "September":
    case "October":
    case "November":
      console.log("AUTUMN");
      break;
    default:
      console.log("Invalid Month");
      break;
  }
}

findSeason("June");

function findMax(a, b, c) {
  let max = Math.max(a, b, c);
  return console.log(max);
}

// Exercises: Level 2
// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
// function solveLinEquation(){

// }

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return arr;
}

console.log(printArray([2, 3, 4, 5, 5, 1]));

function showDateTime() {
  let currentDate = new Date();
  let time =
    currentDate.getDay() +
    "/" +
    currentDate.getMonth() +
    "/" +
    currentDate.getFullYear() +
    "  " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes();
  console.log(time);
}

showDateTime();

function swapValues(a, b) {
  let c = a;
  let d = b;
  // let c = b
  // let a = c;
  console.log(d, c);
}

swapValues(5, 7);

function reverseArray(arra) {
  for (let i = arra.length - 1; i >= 0; i--) {
    console.log(arra[i]);
  }
}

function capitalizeArray(cap) {
  let capArr = [];
  for (let i = 0; i < cap.length; i++) {
    capArr.push(cap[i].toUpperCase());
  }
  return capArr;
}

// function addItem(a,b,c,){
//   let  smi =[]
// let sumOfAll = (a + b + c);
// smi.push(sumOfAll)
// // sumOfAll.split();
// console.log(sumOfAll)
// console.log(smi)
// }

function addItem(a) {
  let allItem = [];
  allItem.push(a);
  return console.log(allItem);
}

function removeItem(a) {
  let item = [];

  const removed = item.splice(a, 1);

  return console.log(item);
  console.log(removed);
}

function sumOfNumbers(n) {
  let allAdd = 0;
  for (let i = 1; i <= n; i++) {
    allAdd += i;
  }
  return console.log(allAdd);
  console.log(allAdd);
}

function sumOfOdds(odd) {
  let sumOdd = 0;
  for (let i = 1; i <= odd; i++) {
    if (i % 2 === 1) {
      sumOdd += i;
    }
  }
  return console.log(sumOdd);
}

sumOfOdds(30);

function sumOfEven(even) {
  let evenSum = 0;
  for (let i = 1; i <= even; i++) {
    if (i % 2 === 0) {
      evenSum = evenSum + i;
    }
  }
  return console.log(evenSum);
}

sumOfEven(30);

function evensAndOdds(total) {
  let totalEven = 0;
  let totalOdd = 0;
  for (let i = 0; i <= total; i++) {
    if (i % 2 === 0) {
      totalEven += 1;
    } else if (i % 2 === 1) {
      totalOdd += 1;
    }
  }
  return console.log(`The number of odds are ${totalOdd}.
The number of evens are ${totalEven}.`);
}

evensAndOdds(100);

function allSum(event) {
  let everyThing = 0;
  for (let i = 0; i < event.length; i++) {
    everyThing += event[i];
  }
  return console.log(`${everyThing}`);
}
allSum([7, 7, 8, 9, 7, 5, 4, 3, 3, 2, 3]);

//
// Writ a function which generates a randomUserIp.
//
// Write a function which generates a randomMacAddress
//

function randomHexaNumberGenerator() {
  let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let hex = "#";

  for (let i = 0; i < 2; i++) {
    hex += alp.charAt(Math.floor(Math.random() * alp.length));
  }

  for (let i = 0; i < 2; i++) {
    hex += num.charAt(Math.floor(Math.random() * num.length));
  }

  for (let i = 0; i < 2; i++) {
    hex += alp.charAt(Math.floor(Math.random() * alp.length));
  }
  return console.log(`${hex}`);
}

//
function userIdGenerator() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let no = "0123456789";
  let userId = "";
  for (let i = 0; i < 2; i++) {
    userId += no.charAt(Math.floor(Math.random() * no.length + 1));
  }
  for (let i = 0; i < 4; i++) {
    userId += letters.charAt(Math.floor(Math.random() * letters.length + 1));
  }

  return console.log(userId);
}
userIdGenerator();

// Exercises: Level 3
function userIdGeneratedByUser() {
  let noOfCharacters = 8;
  //   prompt("Kindly enter the number of character you want");
  let noOfId = 2;
  //   let noOfId = prompt("Kindly enter the number of ids you want to generate");

  let allLetters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let userId = "";
  let allTotal = [];
  for (let j = 0; j <= 3; j++) {
    for (let i = 0; i <= noOfCharacters; i++) {
      userId += allLetters.charAt(
        Math.floor(Math.random() * allLetters.length)
      );
    }
    allTotal.push([userId]);
  }
  return console.log(allTotal);
}
userIdGeneratedByUser();
//The above logic is not totally correct! CORRECT IT NOW

//

function rgbColorGenerator() {
  let newNumber = "0123456789";
  let Rgb = [];
  for (let i = 0; i <= 2; i++) {
    Rgb.push(Math.floor(Math.random() * 281));
  }
  Rgb.tostring;
  return console.log(`RGB(${Rgb})`);
}
rgbColorGenerator();

//
function arrayOfHexaColors() {
  let allLetters = "abcdefghijklmnopqrstuvwxyz0123456789";
  let hexa = "";
  for (let i = 0; i < 4; i++) {
    hexa += allLetters.charAt(Math.floor(Math.random() * allLetters.length));
  }
  console.log(hexa);
}

arrayOfHexaColors();
// above code is not correct !!!!!!! PLEASE ENSURE YOU RECTIFY IT

// let arrayOfHexaColors = () => {
//     let allHexCodes = '123456789abcdef';
//     let loopCount = parseInt(Math.random() * 50);
//     let hexColorArr = [];

//     for(let x=1; x<=loopCount; x++) {
//        let hexChars = [];
//        for (let i = 0; i < 6; i++) {
//           hexChars.push(allHexCodes[parseInt(Math.random() * allHexCodes.length) - 1]);
//        }
//        hexColorArr.push('#' + hexChars.join(''));
//     }
//     return hexColorArr;
//   }
//   console.log(arrayOfHexaColors());

// this solution is correct but i need to understand the code

// 9.Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return console.log(num);
}

factorial(6);

//10

function isEmpty(empty) {
  if (empty) {
    console.log(`Function is not empty`);
  } else if (!empty) {
    console.log(`Empty Function`);
  }
}

isEmpty(true);

//11
function sums(item) {
  let sumTotal = 0;
  for (let i = 0; i < item.length; i++) {
    sumTotal = sumTotal + item[i];
    console.log(sumTotal);

    //        else if((typeof items) === 'string') {others.push(items[i])}
    // return console.log(others)
  }
}
sums([4, 4, 4, 4, 4, 4, 3, 3, 22, 4]);

//THE ABOVE CODE IS INCORRECT

//12
// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sum(items) {
  let sumTotal = 0;
  let others = [];
  for (let i = 0; i < items.length; i++) {
    if (typeof items === "number") {
    }
    sumTotal = sumTotal + items[i];
    console.log(sumTotal);

    //        else if((typeof items) === 'string') {others.push(items[i])}
    // return console.log(others)
  }
}
sum([4, 4, 4, 4, 4, 4, 3, 3, 22, 4]);

//THE ABOVE CODE IS INCORRECT
//THE ABOVE CODE IS INCORRECT

//13
function average(figures) {
  let sumAll = 0;
  let arrLength = figures.length;

  for (let i = 0; i < figures.length; i++) {
    sumAll += figures[i];
  }
  console.log(sumAll);
  let avg = Math.ceil(sumAll / arrLength);
  return console.log(avg);
}

average([2, 3, 3]);
//This code is not complete, ENSURE YOU COMPLETE IT!!!!!!!!!

//14

function modifyArray(ar) {
  if (ar.length < 5) {
    console.log(`Array not found because it is less than 5`);
  } else if (ar.length >= 5) {
    let deletedFifth = ar.splice(4, 1);
    console.log(deletedFifth);
  }

  return console.log(ar);
}
modifyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//15
function isPrime(primeNo) {
  if (primeNo === 0 || primeNo === 1)
    return `Input a number higher than 0 and 1`;
  for (let i = 2; i < primeNo; i++) {
    if (primeNo % i === 0) {
      console.log(`${primeNo} is not prime number`);
    }
  }
  return console.log(`It is a prime number`);
}
console.log(isPrime(10));

//19
function sevenRandomNumbers() {
  let numb = "0123456789";
  let seven = [];
  for (let i = 0; i < 7; i++) {
    if (seven.indexOf(i) === -1) {
      seven.push(Math.floor(Math.random() * numb.length));
    }
  }
  console.log(seven);
}
sevenRandomNumbers();

//This code is not correct, Work on it
// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

function reverseCountries(arr) {
  let copy = arr.slice();
  return console.log(arr.reverse());
}

reverseCountries([9, 8, 7, 6, 5, 4, 3, 2, 1]);
