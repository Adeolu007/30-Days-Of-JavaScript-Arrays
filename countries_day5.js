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

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

console.log(shoppingCart.unshift("Meat"));
console.log(shoppingCart.push("Sugar"));
console.log(shoppingCart.slice(-2, -1));
let gTea = shoppingCart.splice(2, 1, "Green Tea");
console.log(shoppingCart);

if (countries.includes("ETHIOPIA") === true) {
  console.log("ETHIOPIA");
} else if (countries.includes("ETHIOPIA") === false) {
  countries.push("ETHIOPIA");
  console.log(countries);
}

let sliceCountry = countries.slice(0, 10);

console.log(sliceCountry);

let midCountry = countries.slice(5, 6);
console.log(midCountry);

let firstHalf = countries.slice(0, 6);
let secondHalf = countries.slice(6);
console.log(firstHalf);
console.log(secondHalf);
