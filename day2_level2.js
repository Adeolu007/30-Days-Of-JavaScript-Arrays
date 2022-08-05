console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

parseInt("10") === 10;
Math.round("9.8") === 10;

const py = "python";
const ja = "jargon";
console.log(py && ja.includes("on"));

const jarg = "I hope this course is not full of jargon.";
console.log(jarg.includes("jargon"));

console.log(Math.trunc(Math.random() * 100 + 1));

console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);

console.log(Math.trunc(Math.random() * 225 + 1));

let newWord = "JavaScript";
let re = Math.trunc(Math.random() * 10);
console.log(newWord.charAt(re));

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
let anotherString =
  "You cannot end a sentence with because because because is a conjunction";

console.log(anotherString.indexOf("because"));
console.log(anotherString.lastIndexOf("because"));

console.log(anotherString.substring(31, 54));
