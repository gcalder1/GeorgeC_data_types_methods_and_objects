/*
Parameters: 
We need to write a function that returns a rounded number using Math.round()
for a number that the user enters

Result: 
console.log(num); //9.87654321 -> 10

Example: 
const num = 5.4;
const num = -3.4;
const num = "";

Pseudocode: 
Prompt the user for an input using a prompt method 
Take the number that the user wrote and use that to apply your
Math.round() method.
Create a function that takes that number and changes it
Print the new number

Practical Use: 
*/

// const numInput = prompt("Please type a decimal number")

// const num = Number(numInput);

// const roundedNum = Math.round(num);

// console.log(roundedNum);


/*
Parameters: 
We need to write a function takes an array of decimal numbers, runs it through
a function, and then returns an array with the numbers rounded down

Result: 
all whole numbers

Example: 
[1.1, 2, 3.14, 5.6473, 4.4444444];

[1.1, 2, 3.14, 5.6473, 4.4444444, -10.4];


Pseudocode: 
define variable
define new variable to contain new array copy from .map method
function to change to floor
console log variable containing new array


Practical Use: 
*/


const arr = [1.1, 2, 3.14, 5.6473, 4.4444444];

const newArr = arr.map(num => Math.floor(num));

console.log(newArr);

//3rd exercise below

const storePrices = [10.11, 12.99, 13.50, 25.01, 44.99];

const roundedStorePrices = storePrices.map(num => Math.floor(num));

console.log(roundedStorePrices);


//+++Exercise: Number Methods+++

/*
Parameters:
We need to write a function that checks if a value is a number or not. If
it is, then we return "Valid Number" on the console. If it is NOT, then we
return "Not a number" on the console.

Results:
console.log(numCheck); //Valid Number | Not a Number

Examples:
const numNum = 12;
const numNum = "number";
const numNum = ;
const numNum = undefined;

Pseudocode:
We first need to make a variable that will contain the value of what we are
checking this function against.
Then, we need to create a function that will check if the number chosen is
either a number or not, using the isNaN() method.
We need to create conditions within this function:
1) If the value is a number, then we will console log "Valid Number"
2) If the value is NOT a number, then we will console log "Not a Number"
Finally, we need to console log the variable that contains whether the "number"
is true or not WITH the function running through it to then get the appropriate
console log
*/

const numNum = 1 ;
const thisisNaN = isNaN(numNum);

function checkIf (value){
    if (value !== true){
        console.log("Valid Number");
        return "Valid Number"
    } else {
        console.log("Not a number");
        return "Not a number"
    }
};

console.log(checkIf(thisisNaN));

/*
Parameters: We need to turn a string into a decimal number that is not a
string but maintains the same value. 

Results: If successful, we should see the new number. If the number cannot
be turned into a decimal number from the string form, then we should return
"Invalid Number"

Examples:
"1.2"
"one point 2"
"one"
""

Pseudocode: 
First, we want to define a variable that will contain the actual value of 
what we are trying to check
Then we want to create function that will apply the parseFloat() method
to the variable provided to change it.
Within the function, we want to write a conditional statement that checks:
If number can be changed, then we will display the output
If the number cannot be changed, then we will display "invalid number"
Finally, we console log the function with the number applied it
*/

let myValue = "";

let convertedValue = parseFloat(myValue);

function didItDoIt (value) {
    if (value <= 0 || value >= 0){
        return convertedValue;
    } else {
        return "Invalid Number";
    }
};

console.log(didItDoIt(convertedValue));


/*
Parameters:
Results:
Examples:
Pseudocode:
*/

//I'm not sure about number methods pt 3 exercise lol come back to it l8r


//+++Exercise: String Methods+++
/*
Parameters:
Results:
Elements:
Pseudocode:
*/

// let wordPrompt = prompt("Please give me a word");

// let numberPrompt = prompt("Please give me a number");

// let wordValue = wordPrompt;

// let numValue = parseInt(numberPrompt);

// console.log(`The character at index of ${numValue} is ${wordValue.charAt(numValue)}`);


/* Next Exercise...

Parameters:

Results:

Elements:

Pseudocode:

*/

// let wordPrompt2 = prompt("Please give me a sentence");

// let numberPromptFirst = prompt("Please give me a number");

// let numberPromptSecond = prompt("Please give me another number");

// let wordValue2 = wordPrompt2;

// let numValueFirst = parseInt(numberPromptFirst);

// let numValueSecond = parseInt(numberPromptSecond);

// let slicedString = wordPrompt2.slice(numValueFirst, numValueSecond);

// console.log(slicedString);

//+++Exercise: Array Methods+++

/*

Parameters: We need to make a copy of the OG array, and within that new array
copy, we need to make sure we apply the forumla to change the elemnts into
their new values

Results: We should end up with a new array that reflects the changes of the
formula applied from the function to each value as it iterates through the
array

Examples:
[1, 43, 54, 36, 23, 100]
[-1, -2, -100, 0]
["hiddentemp", 1, 2, 5, 2]
[32, , 2, 12, 23, 9]

Pseudocode:
First we would need to create a variable would contain the original
array's values, which would be in celcius
Then we would need to create a new variable that will contain the new 
array after applying the formula to change the values
To create a new array, we will use the .map() method, which will make
a shallow copy of the original array, BUT with the specified function
applied to it
The function for the .map() method will apply the temperature change
formula upon each element as it iterates until it reaches the end
Finally, we console log the variable containing the new array (shallow copy)
to show what the new array contains

*/

const celciusTemps = [0, 10, 20, 30, 40];
console.log(celciusTemps);

const fahrenheitTemps = celciusTemps.map(temp => ((temp * 9 / 5) + 32));

console.log(fahrenheitTemps);

/* Next Exercise...

Parameters:

Results:

Examples:

Pseudocode:

*/

const fruits = ["coco", "mango", "cherry"];

const screamingFruits = fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});

/* Next Exercise...

Parameters: We want to create a new array that contains ONLY the words that
pass the condition check AKA the filter.

Results: All words longer than 5 characters should pass and be in the new
array.

Examples:
["apple", "banana", "kiwi", "mango", "strawberry", "abomination", "joe"];
["apple", "banana", "kiwi", 2, "mango", "strawberry"];
["apple", "banana", "kiwi", , "strawberry"];
[];

Pseudocode:
First, we are going to create a variable that houses our OG array
Next, we are going to create another variable will contain our new array
copy that our .filter() method will therefore create
Then, we are going to create the function for our filter method, which will
contain the condition that will check which elements get passed into the
filtered array and which do not
    - The function will check if the length of the word is longer than 5 
    characters and if it is longer, then it will return true
Finally, we will console log the variable containing the new array

*/

const words = ["apple", "banana", "kiwi", "mango", "strawberry"];

const wordsFiltered = words.filter(word => word.length > 5);

console.log(wordsFiltered);

//+++Exercise: Object Methods+++

/*
Parameters:
Results:
Examples:
Pseudocode:
*/

const car = {make: "toyota", model: "paseo", year: 1993, color: "white"};

const carChoices = Object.keys(car);

console.table(carChoices);

/*
Parameters:
Results:
Examples:
Pseudocode:
*/

const car2 = {make: "toyota", model: "paseo", year: 1993, color: "white"};

const carChoices2 = Object.values(car2);

console.table(carChoices2);

/*
Parameters:
Results:
Examples:
Pseudocode:
*/

const car3 = {make: "toyota", model: "paseo", year: 1993, color: "white"};

const carChoices3 = Object.entries(car3);

console.log(carChoices3);


//+++Exercise: Object Methods+++

/*
Parameters: 
We need to create 2 objects. 
1 object being the target object and the other being the source object. 
And we need to marge the details object into the person object

Results:
The result should be a single object with name: Alice, Age: 30, City: "New York"

Examples:
person string [name: "billy" , age: 20] | details [age: 50, city: "New Jersey"]
person string [name: "billy" , age: 20] | details [age: , city: "New Jersey"]
person string [name: "billy" , age: 20] | details [age: 50, city: "New Jersey", pet: "dog"]
person string [name: "billy" , age: 20] | details []

Pseudocode:
First, I will create two variables.
1) The first variable will be the person variable that will contain the name and age
of alice.
2) The second variable will be the details variable with the age and city information
that is needed for the merge
Then, I will use the Object.assign() method to combine the information from the two
into one array
Finally, I will create a variable that will store the merge happening, and then
I will console log that variable to show what the merged keys look like

*/

const person = {name: "Alice", age: 25};
const details = {age: 30, city: "New York"};

const mergedResult = Object.assign(person, details);

console.log(mergedResult);




