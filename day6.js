const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i >= 0; i--) {
  console.log(countries[i]);
}

let i = 0;
do {
  console.log(countries[i]);
  i++;
} while (i <= 10);

// webTechs
for (let a = 0; a < 7; a++) {
  console.log(webTechs[a]);
}

let o = 0;
while (o < 7) {
  console.log(webTechs[o]);
  o++;
}

let f = 0;
do {
  console.log(webTechs[f]);
  f++;
} while (f < 7);

// Iterate 0 to n using for loop
const n = [];
for (let r = 0; r < n; r++) {
  console.log(n[r]);
}

let harsh = "";
for (let i = 0; i <= 7; i++) {
  harsh += "#";
  console.log(harsh);
}

//5
for (let u = 0; u < 11; u++) {
  console.log(`${u} *  ${u} = ${u * u}`);
}

for (let k = 0; k <= 10; k++) {
  console.log(`${k}  ${k ** 2}  ${k ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (let z = 0; z <= 100; z++) {
  if ([z] % 2 === 0) {
    console.log([z]);
  }
}

for (let z = 0; z <= 100; z++) {
  if (!([z] % 2 === 0)) {
    console.log([z]);
  }
}

//9 Use for loop to iterate from 0 to 100 and print only prime numbers

let N = 100;
console.log(N);
for (let i = 1; i <= N; i++) {
  if (N[i] % 2 === 1 && N[i] % N[i] === 1) {
    console.log(N);
  }
}
//Code not correct

let sumOfAllNumbers = 0;
for (let i = 0; i <= 100; i++) {
  sumOfAllNumbers += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sumOfAllNumbers}.`);

//
let sumEven = 0;
let sumOdd = 0;
for (let z = 0; z <= 100; z++) {
  if (z % 2 === 0) {
    sumEven = sumEven + z;
  } else if (!(z % 2 === 0)) {
    sumOdd += z;
  }
}
console.log(sumEven);
console.log(sumOdd);
console.log(
  `The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`
);

let newYet = 0;
let newo = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    newYet += i;
  } else if (i % 2 === 1) {
    newo += i;
  }
}
let sumOfEvenAndOdd = newYet + newo;
console.log(sumOfEvenAndOdd);

// Develop a small script which generate array of 5 random numbers

let randomNumber = [];

for (let i = 0; i < 5; i++) {
  randomNumber.push(Math.floor(Math.random() * 50));
}
console.log(randomNumber);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// for (let i = 0; i < 5; i++) {
//   randomNumber.push(Math.floor(Math.random() * 50));
// }
// console.log(randomNumber);      NUMBER 14

// Develop a small script which generate a six characters random
let allCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let sixCharacters = "";
for (let i = 0; i < 6; i++) {
  sixCharacters += allCharacters.charAt(
    Math.floor(Math.random() * allCharacters.length)
  );
}
console.log(sixCharacters);

//  EXERCISE 2

const alpAndNumber =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const specifiedLength = alpAndNumber.length;
let solution = " ";

for (let i = 0; i <= 7; i++) {
  solution += alpAndNumber.charAt(Math.floor(Math.random() * specifiedLength));
}

console.log(solution);

let randomRgb = [];
for (let i = 0; i < 3; i++) {
  randomRgb.push(Math.floor(Math.random() * 280));
}
console.log(`RGB(${randomRgb})`);

//

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
console.log(`${hex}`);
//

const capCountries = [];

for (const capCountry of countries) {
  capCountries.push(capCountry.toUpperCase());
}
console.log(capCountries);

// WHAT IS THE DIFF BTW THE CODE ABOVE AND BELOW??
const newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries);

let countryLength = [];
for (let i = 0; i < countries.length; i++) {
  countryLength.push(countries[i].length);
}
console.log(countryLength);

//6

let countryLen = [];

for (let j = 0; j < countries.length; j++) {
  countryLen.push([
    countries[j].length,
    countries[j].toUpperCase(),
    countries[j].slice(0, 3).toUpperCase(),
  ]);
}
console.log(countryLen);

//7
let containLand = [];
let noLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("land")) {
    containLand.push(countries[i]);
  } else {
    noLand.push(countries[i]);
  }
}
console.log(containLand);
console.log(noLand);
//8
let containIa = [];
let dontContain = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].endsWith("ia")) {
    containIa.push(countries[i]);
  } else {
    !countries[i].endsWith("ia");
    dontContain.push(countries[i]);
    // console.log(`${dontContain} : These are countries ends without ia`)
  }
}
console.log(containIa);
console.log(`${dontContain} : These are countries ends without ia`);

//9
//  Using the above countries array, find the country containing the biggest number of characters.
let maxiLength = 0;
let word = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > maxiLength) {
    maxiLength = countries[i].length;
    word = countries[i];
  }
}
console.log(word);
console.log(maxiLength);

//10
let maxLength = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    maxLength.push(countries[i]);
  }
}
console.log(maxLength);

// 11
// let webTechsNumber = 0;
// for (let i = 0; i<webTechs.length;i++){
//   console.log(webTechs[i].length)
//   if (webTechs[i].length > webTechsNumber){
//     webTechsNumber=webTechs[i].length
//   }
// }
// console.log(webTechsNumber)

let webTechsNumber = 0;
let webTechsWord = "";
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > webTechsNumber) {
    webTechsNumber = webTechs[i].length;
    webTechsWord = webTechs[i];
  }
}
console.log(webTechsNumber);
console.log(webTechsWord);

//12
// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// let webName = [];
// for(let i = 0; i < webTechs.length; i++){
//   let row = webTechs[i];
//   console.log(row)
// for (let j=0; j <row.length; j++){
//   webName.push (row[i], row[i].length)
// }
// }
// console.log(webName)
webName = [];
for (let i = 0; i < webTechs.length; i++) {
  webName.push([webTechs[i], webTechs[i].length]);
}
console.log(webName);

//13
const mernStacks = ["mongoDB", "Express", "React", "Node"];
let allFirstAlphabet = "";
for (let i = 0; i < mernStacks.length; i++) {
  // allFirstAlphabet.push(mernStacks[i].slice(0,1).toUpperCase());
  allFirstAlphabet += mernStacks[i].slice(0, 1).toUpperCase();
}
console.log(allFirstAlphabet);

//14
for (let each of webTechs) {
  console.log(each);
}

//15
const fruit = ["banana", "orange", "mango", "lemon"];
for (let i = fruit.length - 1; i >= 0; i--) {
  console.log(fruit[i]);
}

//16
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (let i = 0; i < fullStack.length; i++) {
  let allStacks = fullStack[i];
  for (let j = 0; j < allStacks.length; j++) {
    console.log(allStacks[j]);
  }
}

// Exercises: Level 3
let newCountry = countries.slice().sort();
console.log(newCountry);

// Sort the webTechs array and mernStack array
console.log(webTechs.sort());
console.log(mernStack.sort());

// Extract all the countries contain the word 'land' from the countries array and print it as array

let extractLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    extractLand.push(countries[i]);
  }
}
console.log(extractLand);

// Find the country containing the hightest number of characters in the countries array

let highest = "";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > highest) {
    highest = countries[i];
  }
}
console.log(highest);

//The above code is not correct

// Extract all the countries containing only four characters from the countries array and print it as array
let fourCountries = [];
let twoOrMore = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    fourCountries.push(countries[i]);
  } else if (countries[i].length >= 2) {
    twoOrMore.push(countries[i]);
  }
}
console.log(fourCountries);
console.log(twoOrMore);

// Reverse the countries array and capitalize each country and stored it as an array

let reverseCountries = [];
for (let i = countries.length - 1; i >= 0; i--) {
  reverseCountries.push(countries[i].slice(0, 1) + countries[i].slice(1));
}
console.log(reverseCountries);
//

// Exercise 1
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
