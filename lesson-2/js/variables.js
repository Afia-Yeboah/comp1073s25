/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;
const myH1 = document.querySelector("h1");


/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
// MY NOTES: Initialize is to set a value to a variable using let or var
myName = "Afia";
myAge = 24;


/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
// NOte: Constant cannot be redeclared because it's set
// let you can re-declare
myName = "Batiyah";
myAge = 25;


// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;

// Strings (use '' or "")
let manufacturer = "Honda";

// Booleans
let isCarCool = true;

// Arrays
let myCarArray = ["Honda", "Nissan", "Toyota"];
// or
let myMixedArray = ["Afia", true, 24];

// Objects
// to retrieve data, in the console use . eg. myDog.breed
let myDog = {
    name: "Duncan", 
    breed: "Retriever",
    size: "Large",
    age: 8,
    goodDog: true
}; //It's good practice to put a semi-color at the end of the bracket, it's not required though

// STEP 5: Typing (JavaScript is a loosely-typed language)
// use the array name .forEach to retrieve all the data for an array
myCarArray.foreach((element)=> console.log(element));
//for object : 
Object.keys(myDog).forEach((element)=> console.log(element));
