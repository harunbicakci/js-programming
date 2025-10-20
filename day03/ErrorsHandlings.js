console.log("Test Started");

try {
  console.log(result);
} catch (e) {
  console.log(`An error occured =>  ${e}`);
} finally {
    console.log("Finally Block.");
}

console.log("Test Ended");

console.log("--------------------------------------------");

throw new Error("An error occured!");