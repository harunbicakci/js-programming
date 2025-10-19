let school = "CYDEO";

console.log(school);
console.log(typeof school);

console.log(school.length);

console.log(school.charAt(1));
console.log(school[1]);
console.log("---------------------------------------");

console.log(school[school.length - 1]);

for (i = 0; i < school.length; i++) {
  console.log(school[i]);
}
console.log("---------------------------------------");

let expectedResult = "JavaScript";
let actualResult = "JAVASCRIPT";

console.log(expectedResult.toLowerCase() == actualResult.toLowerCase());
console.log("---------------------------------------");
