// Create an array of strings and add 10 employee names to it.
let employees = [
  "John Smith",
  "Alice Johnson",
  "Bob Williams",
  "Emily Brown",
  "David Jones",
  "Sarah Garcia",
  "Jane Miller",
  "Mike Davis",
  "Lisa Rodriguez",
  "Daniel Martinez",
];

// print the original array
console.log(employees);

// set the first employee name to "Harun" and last employee name to "Lucy"
employees[0] = "Harun";
employees[employees.length - 1] = "Lucy";

// print the modified array
console.log(employees);

console.log("-------------------------------------------");

// displya all the employee names in reverse order
for (let i = employees.length - 1; i >= 0; i--) {
  console.log(employees[i]);
}

console.log("-------------------------------------------");

let numbers = [100, 200, 300, 400, 5, 4, 6, 7, 8, 9, 10, -100, 2000];

// find the max number and min number in the numbers array, do not use any build-in functions or methods
let maxNumber = numbers[0];
let minNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNumber) {
    maxNumber = numbers[i];
  }
  if (numbers[i] < minNumber) {
    minNumber = numbers[i];
  }
}

console.log("Max number:", maxNumber);
console.log("Min number:", minNumber);

console.log("-------------------------------------------");

// Write a program that can sort the numbers array in ascending order, do not use any built-in sorting functions or methods
let sortedNumbers = [...numbers];

for (let i = 0; i < sortedNumbers.length; i++) {
  for (let j = 0; j < sortedNumbers.length - i - 1; j++) {
    if (sortedNumbers[j] > sortedNumbers[j + 1]) {
      let temp = sortedNumbers[j];
      sortedNumbers[j] = sortedNumbers[j + 1];
      sortedNumbers[j + 1] = temp;
    }
  }
}

console.log("Sorted numbers:", sortedNumbers);

console.log("-------------------------------------------");
let nums = [1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];

// write a program that can remove duplicates from nums array
let uniqueNums = [];

for (let i = 0; i < nums.length; i++) {
  if (!uniqueNums.includes(nums[i])) {
    uniqueNums.push(nums[i]);
  }
}

console.log("Unique numbers:", uniqueNums);
