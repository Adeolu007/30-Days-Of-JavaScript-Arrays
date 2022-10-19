const arre = ["rice", "bowen", "creswell", "zuma", "fornals"];
console.log(arre.length);
console.log(arre.slice(2, 3));
console.log(arre.slice(arre.length));
console.log(arre.slice(0, 1));

const mixedDataTypes = [1, 3, "Wet", true, "happy", 45, 86];
console.log(mixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies.slice(3, 4));
console.log(itCompanies.slice(arre.length));
console.log(itCompanies.slice(0, 1));

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());

const yr = itCompanies.join(", ");
console.log(`${yr} are big IT companies.`);

let comp = "App";
itCompanies.includes(comp)
  ? console.log(`${comp}`)
  : console.log(`${comp} not found`);

//Filter out companies which have more than one 'o' without the filter method
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(3, 4));
console.log(itCompanies.shift());

console.log(itCompanies.splice(3, 1));
console.log(itCompanies.pop());
console.log(itCompanies.splice(0, itCompanies.length));
//   Exercise: Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(Math.max(...ages));
console.log(Math.min(...ages));

let median = ages.slice(3, 6);
