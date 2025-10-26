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
