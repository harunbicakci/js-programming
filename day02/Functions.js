/**
 * Displays a greeting message to the console.
 * This function logs two lines: "Hello Programmes!" and "Welcome to JavaScript Programming.".
 * @returns {void} This function does not return a value.
 */
function greetings(){
    console.log("Hello Programmes!");
    console.log("Welcome to JavaScript Programming.");
}

greetings();
console.log("-----------------------------------");


/**
 * Displays the name of a person to the console.
 * @param {string} [personName="Adam"] - The name of the person. Defaults to "Adam" if not provided.
 * @returns {void} This function does not return a value.
 */
function displayName(personName = "Adam"){
    console.log(`The name of the person is ${personName}`);
}

displayName();
displayName("Lucy");
console.log("-----------------------------------");

function addNumbers(num1, num2, num3 = 0){
    return num1 + num2 + num3;
}

let result = addNumbers(10, 20);
console.log(result);

let x = addNumbers(10, 20, 30);
console.log(x);