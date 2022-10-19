let manIncome =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month";
const allDigit = /\d+/g;
let sum = 0;
let allNumbers = manIncome.match(allDigit);
console.log(allNumbers);
let redu = allNumbers.reduce((acc, val) => +acc + +val);
console.log(redu);

///////
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(paragraph);

const pat = /\w+/g;
const results = paragraph.match(pat);
let each = results.reduce((acc, cur) => {
  if (acc[cur]) {
    acc[cur]++;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
let newEach = [];
for (let me in each) {
  newEach.push([me, each[me]]);
}

let sortable = newEach.sort((a, b) => b[1] - a[1]);
console.log(newEach);
//

// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

// const cleanText = (s) => {
//   let word = sentence.replace(/[^\w\s]/g, "");
//   return word;
// };
// //

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (s) => {
  let word = sentence.replace(/[^\w\s]/g, "");
  return word;
};
let words = sentence.replace(/[^\w\s]/g, "");
console.log(cleanText(sentence));

let threeCount = words.split(" ").reduce((acc, curr) => {
  if (acc[curr]) acc[curr]++;
  else {
    acc[curr] = 1;
  }
  return acc;
}, {});
console.log(threeCount);

let arrArr = Object.entries(threeCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);
