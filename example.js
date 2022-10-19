// // let arr = { continent: "Asia", country: "Japan" , fri:{open:10, close:3}};
// // ({fri:{open,close}}) = arr
// // console.log(open,close)
// // console.log(continent, country, menu)

// // continent: 'Europe', country: 'England',
// // continent: 'Africa', country: 'Nigeria' }

// // function myFunction(a,n) {
// //     return a[n-1]
// //   }

// //   console.log(myFunction([1,2,3,4,5],3))

// //     let bb = [1,2,3]
// // console.log(bb[1])
// // console.log(myFunction({ continent: 'Asia', country: 'Japan' }))
// // console.log(myFunction(arr));
// let je = 'yrtyre'

// const found = je.match(/y/gi);

// console.log(found)

// // let re = [
// //     [1,3],[2,5]
// // ]

// // let newe = [...re]
// // console.log(newe)
// // let [a,b] = re;
// // let [one,three] = a
// // let [two,five] = b
// // console.log(one)

// // for (let cou of re){
// //     let [] = cou
// //     console.log(country)
// // }

// // let mar = man.reduce((a,b)=>a+b)
// // console.log(mar)
// // console.log(man(1,2,3,4,5))

// // function myFunction(a){
// //     const myCar = {};
// //     myCar.key = a
// // return myCar
// // }
// // console.log(myFunction('a'))

// // function myFunction(obj, ker){

// //     return obj[ker]
// //     }

// //     console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'))

// //     function myFunction(a){

// //    let threeLetters = a.substring(a.length-3,a.length)
// //         return threeLetters
// //         }
// // console.log(myFunction('fgedcba'))
// // function myFunction(arr) {
// //   let me = arr.sort((a, b) => (a > b ? 1 : -1));
// //   return me;
// // }
// // console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"]));

// const we = [1,2];
// let [one,two] = we;
// console.log(one,two);

// [one,two] = [two, one];
// console.log(two,one)

// let nested = [2,4, [100,200]]
// let [first, second, [third, four]] = nested
// console.log(first, second, third, four)

// 4 < 7 && console.log('Correct')

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   const [[H, C, J, R],[N,E,M]] = fullStack
//   console.group(H,C,J,R,N,E,M)

// function array_Clone(a){
//   let b = [...a]
// return b
// }
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

function getSum(a, b) {
  if (a === b) {
    return a;
  } else {
    return a + b;
  }
}

console.log(getSum(-266, 335));

// let a = -1;
// let b = 3;
// let sum = 0
// for
// (let i = a; i<=b; i++){
// console.log(sum += push)
// }
console.log(typeof 32);
//

//  if (pin.includes(b)) return true}

// console.log(validatePIN('02'))

// && pin.length === 4 || pin.length === 6){
//   console.log(true)
//   Number(pin)
//    return true}else{return false}
//   }
const b = "0123456789";
const a = "012346";
const c = a.split("");
console.log(c);
for (let re of c) {
  console.log(b.includes(re));
}

console.log(a.length === 4 || a.length === 6 ? true : false);

// function validatePIN (pin) {
// const newPin = pin.split('')
// const validNumber = '0123456789'

// if(newPin.length===4 || newPin.length ===6){
//   // for(let cc of newPin){
//     (validNumber.includes(newPin)? true : false)

// }

// function validatePIN (pin) {
//   const checkLength = pin.length === 4 || pin.length === 6;

//   const numMatch = /^[0-9]/g

//   if (checkLength && pin.match(numMatch)){
//     return true;
//   }

//   return false;
// }

// const validatePIN = pin => ((pin.length === 4 || pin.length === 6) && pin.match(/^[0-9]/g)) ? true : false

function maskify(cc) {
  let loopCC = [];
  let newCC = cc.split("");

  let lastFour = newCC.slice(-4);
  if (newCC.length <= 4) {
    return cc;
  } else if (cc.length > 4) {
    let hash = newCC.length - 4;
    for (let re of newCC) loopCC.push("#");
    console.log(loopCC);
  }
  let spi = loopCC.slice(0, -4);
  console.log(spi);
  return spi.concat(lastFour).join("");
}

console.log(maskify("454766352782"));

// function getCount(str) {
//   let het = str.split('')
//   console.log(het)
//   let counter =0;
// //   let vowel = 'aieou'
// // for(let i =0; i<het.length; i++){
// // if (het.includes(vowel)) return counter++
// // }
// let realMap = str.map(a=>{
//  return a.includes(), counter++

// })
// console.log(realMap)
// }
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)
// const st = ['a','k','r','e','e']
// // const getCount = st.map((na)=>na.toUpperCase())
// const getCount = st.map((na)=>na.match(/ae/gi))
// console.log(getCount)

// // console.log(getCount('aedi'))

let mew = "abcde";
let newA = ["a", "r", "b"];
let count = 0;
console.log(newA.includes("ac"));
for (let i = 0; i < mew.length; i++) {
  if (newA.includes(mew)) {
    let man = count++;
  }
}
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(input) {
  var vowelsCount = 0;
  var inputLetters = input.split("");

  const vowels = ["a", "e", "i", "o", "u"];

  vowels.forEach(function (vowel) {
    inputLetters.forEach(function (inpLetter) {
      if (inpLetter === vowel) {
        vowelsCount++;
      }
    });
  });

  return vowelsCount;
}

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length : 0;
}

function getCount(str) {
  var vowelsCount = 0;
  for (index in str) {
    switch (str[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  var vowelsCount = 0;

  // enter your majic here
  for (let i of str) {
    if (vowels.includes(i)) vowelsCount++;
  }

  return vowelsCount;
}
