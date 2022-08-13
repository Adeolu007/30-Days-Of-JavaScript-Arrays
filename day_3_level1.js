let firstName = "Adeolu";
let lastName = "Odunuyi";
let country = "Nigeria";
let city = "Lagos";
let age = 27;
let isMarried = false;
let year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

typeof "10" === 10; //false
parseInt("9.8") == 10; //false

let y = 23;
let man = "He is a man";
let woman = "She is a woman";

let ol = "";
let rey = null;
let reey = false;

4 > 3; //true
4 >= 3; //true
4 < 3; //false
4 <= 3; //false
4 == 4; //true
4 === 4; //true
4 != 4; //false
4 !== 4; //false
4 != "4"; //false
4 == "4"; //true
4 === "4"; //false

let pyt = "python";
let jar = "jargon";

pyt.length != jar.length;

4 > 3 && 10 < 12; //true
4 > 3 && 10 > 12; //false
4 > 3 || 10 < 12; //true
4 > 3 || 10 > 12; //true
!(4 > 3); //false
!(4 < 3); //true
!false; //true
!(4 > 3 && 10 < 12); //false
!(4 > 3 && 10 > 12); //true
!(4 === "4"); //true
!(dra.includes("on") && pyth.includes("on"));

const currentDate = new Date();
const years = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDay() + 1;
const date = currentDate.getDate();
const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = Date.now();

// Exercises: Level 2
let base = prompt("Enter base");
let height = prompt("Enter height");
let area = height * base;

console.log(`Enter base:${base}\nEnter height:${height}\n
The area of the triangle is ${area}`);

let sideA = prompt("Enter side a");
let sideB = prompt("Enter side b");
let sideC = prompt("Enter side c");
let perimete = sideA + sideB + sideC;

console.log(
  `Enter side a:${sideA}\nEnter side b:${sideB}\nEnter side c:${sideC}\nThe perimeter of the triangle is ${perimete}`
);

let length = prompt("Enter length");
let width = prompt("Enter width");
let areaOfRec = length * width;
let perimeter = 2 * areaOfRec;

console.log(
  `Enter length:${length}\nEnter width:${width}\nThe area of rectangle ${areaOfRec}\nThe perimeter of the triangle is ${perimeter}`
);

let radius = prompt("Enter radius");
const pi = 3.14;
let c = 2;
let areaOfCircle = radius * radius * pi;
let circumOfCircle = c * radius * pi;

console.log(
  `Enter radius:${radius}\nEnter pi:${pi}\nThe area of circle ${areaOfCircle}\nThe circumference of the circle is ${circumOfCircle}`
);

let x = prompt("Enter x");
let y1;
y1 = 2 * x - 2;
console.log(`y = ${y1}`);

let hours = prompt("Enter hours");
let rate = prompt("Enter rate per hour");
let weeklyEarn = hours * rate;

console.log(
  `Enter hours:${hours}\nEnter rate per hour:${rate}\nYour weekly earning is ${weeklyEarn}`
);

let Myname = "Adeolu";
if (Myname.length >= 7) {
  console.log("your name is long");
} else {
  console.log("your name is short");
}

let MyFirstName = "Adeolu";
let MyLastName = "Odunuyi";

if (MyFirstName.length > MyLastName.length) {
  console.log(
    `My first name, ${MyFirstName} is longer than my family name, ${MyLastName} `
  );
} else if (MyLastName.length > MyFirstName.length) {
  console.log(
    `My first name, ${MyFirstName} is shorter than my family name, ${MyLastName} `
  );
}

let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} years older than you.`);
////

let birthYear = prompt("Enter birth year");
let adult = 2022 - birthYear;
if (adult >= 18) {
  console.log(`You are ${adult}. You are old enough to drive`);
} else if (adult < 18) {
  console.log(
    `You are ${adult}. You will be allowed to drive after ${18 - adult} years.`
  );
}
//

let yourYears = prompt("Enter number of years you live:");
let yearsLived = 100 - yourYears;
let livedSeconds = yourYears * 365 * 24 * 60 * 60;
let secondsRemaining = yearsLived * 365 * 24 * 60 * 60;

console.log(
  `You lived ${livedSeconds} seconds, remaining ${secondsRemaining} seconds`
);

console.log(`${years}-${month}- ${day}: ${hour}:${minutes}`);
console.log(`${day}-${month}-${years}: ${hour}:${minutes}`);
console.log(`${day}/${month}/${years}: ${hour}:${minutes}`);
