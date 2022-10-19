const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

if (webTechs.includes("Sass") === true) {
  console.log("Sass is a CSS preprocess");
} else if (webTechs.includes("Sass") === false) {
  webTechs.push("Sass");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let maxi = ages[0];
let mini = ages[0];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] > maxi) {
    maxi = ages[i];
  } else if (ages[i] < mini) {
    mini = ages[i];
  }
}
console.log(mini, maxi);

let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}

const avge = sum / ages.length;
console.log(avg); //Average

const range = maxi - mini;
console.log(range);

console.log(avg); //Average
console.log(Math.abs(mini - avge), Math.abs(maxi - avge));
