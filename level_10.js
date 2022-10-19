let newSet = new Set();
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newSetNum = new Set(num);
for (let item of newSetNum) {
  console.log(item);
}

console.log(newSetNum.delete(10));
console.log(newSetNum);
newSetNum.clear();
const countries = ["Norway", "Nigeria", "Ghana", "Japan", "Ghana", "Germany"];
let newCountries = new Set(countries);
console.log(newCountries.size);

const country = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Nigeria", "Abuja"],
  ["Ghana", "Accra"],
  ["England", "London"],
  ["Brazil", "Rio"],
];

const newMap = new Map(country);
console.log(newMap);

const counts = [];
const count = {};

// solve number 6

// Exercises:Level 2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const c = [...a, ...b];
const d = new Set(c);
console.log(d);
//The above is the solution to number 1 and 3
let Aa = new Set(a);
let Bb = new Set(b);
let e = a.filter((no) => Bb.has(no));
let Ee = new Set(e);
console.log(e); //

// Exercises:Level 3
