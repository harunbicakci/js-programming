let score = 50;

if (score >= 60) {
  console.log("You passed the exam!");
} else {
  console.log("You failed the exam!");
}

console.log("----------------------------");

let number = 1000;

if (number > 0) {
  console.log("Positive number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("The number is zero");
}

console.log("----------------------------");

score = 50;

if (score >= 0 && score <= 100) {
  if (score >= 60) {
    console.log("You passed the exam!");
  } else {
    console.log("You failed the exam!");
  }
}else{
    console.log("Invalid score!");
}
