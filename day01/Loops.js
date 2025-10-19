for (i = 0; i < 5; i++) {
  console.log("Hello World!" + i);
}

console.log("------------------------------");

for (i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("------------------------------");

for (i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 5) {
    break; // it terminates the loop
  }
}

console.log("------------------------------");

for (i = 1; i <= 10; i++) {
  if (i == 3 || i == 7 || i == 9) {
    continue;
  }
    console.log(i);

}
