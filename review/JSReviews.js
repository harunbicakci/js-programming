let num = 100;

console.log(num);

num = "JavaScript";

console.log(num);

console.log("------------------------");

let actualResult = "100.5";

let expectedResult = 100.5;

console.log(actualResult === expectedResult); // false => Does NOT ignore data type

console.log(actualResult == expectedResult); // true => Does ignore data type

console.log("------------------------");

let browser = "chrome";

if (browser === "chrome") {
  console.log("Google Chrome is the best browser");
} else if (browser === "firefox") {
  console.log("Mozilla Firefox is selected");
} else {
  console.log("Invalid broeser name!");
}

console.log("------------------------");

switch (browser) {
  case "chrome":
    console.log("Google Chrome is the best browser");
    break;
  case "firefox":
    console.log("Mozilla Firefox is selected");
    break;
  default:
    console.log("Invalid broeser name!");
    break;
}

console.log("------------------------");

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("------------------------");

let str = "JavaScript";

// for of loop
for (let letter of str) {
  console.log(letter);
}

console.log("------------------------");

let s = "abc123efghi5678klmn90";

s = s.replace(/\d/g, "");

console.log(s);

console.log("------------------------");

let expectedTitle = "Self Enrollment Portal";

let actualTitle = "self enrollment portal";

console.log(expectedTitle === actualTitle); // false

console.log(expectedTitle.toLowerCase() === actualTitle.toLowerCase()); // true
// "self enrollment portal" === "self enrollment portal"

console.log("------------------------");

console.log(
  `The Expected Title is ${expectedTitle}, and the Actual Title is ${actualTitle}`
);

console.log("------------------------");

let countriesDropDown = ["USA", "Canada", "UK", "France", "Germany"];

console.log(countriesDropDown);
console.log(countriesDropDown[0] === "USA");

for (let country of countriesDropDown) {
  console.log(country);
}

console.log(countriesDropDown.length === 5);

console.log("------------------------");

// use for loop to print each element of the countryDropDown in reversed order

for (let i = countriesDropDown.length - 1; i >= 0; i--) {
  console.log(countriesDropDown[i]);
}

console.log("------------------------");

/* Create a function that can reverse a string or array
    function takes a string or array as an argunent and returns the reversed version of it
*/

function reverseStringOrArray(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

console.log(reverseStringOrArray("Hello World")); // dlroW olleH
console.log(reverseStringOrArray("JavaScript")); // tpircSavaJ

console.log("------------------------");

// Interview Question 1

// Word Break Problem
// Given an input string and a dictionary of words, find out if the input string can be segmented
// into a space-separated sequence of dictionary words. See following examples for more details.
// This is a famous Google interview question, also being asked by many other companies now a days.
// Consider the following dictionary
//     { i, like, sam, sung, samsung, mobile, ice, cream, icecream, man, go, mango}
//     Input:  ilike
//     Output: Yes
//     The string can be segmented as "i like".

//     Input:  ilikesamsung
//     Output: Yes
//     The string can be segmented as "i like samsung" or "i like sam sung".

console.log("------------------------");

// Interview Question 2

// Create a function that can Count of substrings having all distinct characters
//         Given a string str consisting of lowercase alphabets, the task is to find the number of possible substrings (not necessarily distinct) that consists of distinct characters only.
//             Examples:
//                 Input: Str = “gffg”
//                 Output: 6
//         Explanation:
//             All possible substrings from the given string are,
//             ( “g“, “gf“, “gff”, “gffg”, “f“, “ff”, “ffg”, “f“, “fg“, “g” )
//             Among them, the highlighted ones ( “g“, “gf“, “f“, “f“, “fg“, “g” ) consists of distinct characters only.

//                 Input: str = “gfg”
//                 Output: 5
//         Explanation:
//             All possible substrings from the given string are,
//             ( “g“, “gf“, “gfg”, “f“, “fg“, “g” )
//             Among them, the highlighted ( “g“, “gf“, “f“, “fg“, “g” ) consists of distinct characters only.

function countDistinctSubstrings(str) {
  let count = 0;
  const n = str.length;
  for (let i = 0; i < n; i++) {
    let seen = new Set();
    for (let j = i; j < n; j++) {
      if (seen.has(str[j])) break;
      seen.add(str[j]);
      count++;
    }
  }
  return count;
}

// Usage examples:
console.log(countDistinctSubstrings("gffg")); // Output: 6
console.log(countDistinctSubstrings("gfg")); // Output: 5
console.log(countDistinctSubstrings("abc")); // Output: 6
