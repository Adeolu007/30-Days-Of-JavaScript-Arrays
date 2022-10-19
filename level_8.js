let dog = {};

console.log(dog);
dog = {
  name: "jackson",
  legs: 4,
  color: "black",
  age: 9,
  bark: function () {
    return `woof woof`;
  },
};

console.log(dog.color);
console.log(dog.legs);
console.log(dog.age);
console.log(dog.bark);
console.log(dog.name);

dog.breed = "bull dog";
dog.getDogInfo = dog;

// Exercises: Level 2
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
console.log(users.Thomas.points);

let sum = [];
let keyForFity = [];
for (let key in users) {
  let allKeys = users[key];
  if (allKeys.points >= 50) {
    sum.push(allKeys.points);
    keyForFity.push(allKeys);
  }
}
console.log(sum);
console.log(keyForFity);

// let ase = ''
// let neww = ''

// for (let ky in users){

// neww+=users[ky].skills[i].slice(0,1)
// }

// console.log(neww)

//WRONG CODE

users.Name = "Adeolu";
console.log(users);

for (let allKey in users) {
  console.log(allKey);
  console.log(users[allKey]);
}

users["country name"] = "Nigeria";
users.capital = "Abuja";
users.populations = 200000;
users.languages = ["Igbo", "Yoruba", "Hausa"];

console.log(users);

let personAccount = {
  firstName: "Bukayo",
  lastName: "Saka",
  incomes: "100k/w",
  expenses: "many",
};

let allNew = [];
let allNewB = [];
function signUp(obj) {
  if (allNew.includes(obj) === true) {
    allNewB.push(obj);
    return `You already have an account`;
  } else if (allNew.includes(obj) === false) {
    allNew.push(obj);
    return allNew;
  }
}

signUp("wale");
signUp("Deji");
signUp("wale");
signUp("Deji");
signUp("Femi");
signUp([
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
]);
signUp(1);

console.log(allNew);
console.log(allNewB);
//It is not effective for arrary

const allData = [];
function signIn() {
  let emailAdd = prompt("kindly enter your email account");
  let emailPass = prompt("kindly enter your password");
  allData.push(emailAdd);
  allData.push(emailPass);
  return allData;
}

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
let averageOfRating = [];
function averageRating() {
  for (let i = 0; i < products.length; i++) {
    console.log([i]);
  }
  console.log(products[1].ratings);
}
averageRating();
//Wrong code

products.forEach(function (ra) {
  console.log(`${ra.likes}`);
});
