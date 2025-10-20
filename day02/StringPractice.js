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

let str = "python python";
str = str.replace("python", "javascript");

console.log(str);
console.log("---------------------------------------");

let str2 = "python python";
str2 = str2.replace(/python/g, "javascript"); // ng: global flag
console.log(str2);
console.log("---------------------------------------");

let email = "cydeoschool@gmail.com";

let domain = email.substring(email.indexOf("@") + 1);
console.log(domain);

let domainMain = email.substring(
  email.indexOf("@") + 1,
  email.lastIndexOf(".")
);
console.log(domainMain);
console.log("---------------------------------------");

let employeeName = "Lucy";
let employeeSalary = 150_000;

console.log(
  `Hello my name is ${employeeName} and my salary is $${employeeSalary}`
);
