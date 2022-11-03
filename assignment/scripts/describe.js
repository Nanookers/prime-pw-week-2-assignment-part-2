// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// First, we establish the variable of 'name', with the value of dane.
// Then we set up a conditional with an if/else condition.
// If the value of variable 'name' is a true, definite match to Mary, the console logs: 'Hi, Mary!'
// Otherwise, any other entered value logs: 'How do you do?' 
// Given that Dane is the value of the variable 'name', the else will be posted in console and read: 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We establish two variables: 'secret' and 'code'. 'Code' has munerical value of 123. Secret does not have a value at the beginning (though it attains one later).
// The first 'if' conditionals establishes that if the value of 'code' equals absolute 123, the console.log will post the variable of 'secret' as 'super', and then the value of code (123) is multiplied by 2 (246). 
// the second 'if' statements looks for a value of 'code' that is larger than 250. If the value of 'code' is larger, console.log will post the value of 'duper'.
// Console.log will post 'super' as the value of secret, and then multiply the value by 2, increasing its value to 246.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Three variables are established--  let isStudent is a boolean, let age is a numerical, as well as let zip. 

// we have a series of if/else conditions, the first being a compound conditional (marked &&) to determine if 
// the isStudent boolean is definitley true, followed by a numerical value that is greater than '80000' for the let zip variable. 
// The console.log(`You're a student on the West Coast!`) will post only if the boolean's true statement is met, and the numerical value exceeds 80000

// the following compound conditional is an either/or statement ( determined by || ). If the true value of the boolean variable is not met in the first condition,
// and it is definitely false, console.log will post the string ( 'What are your hobbies?' ). However, even if the boolean variable is true, as long as the numerical 
//age value is less than 30, console.log will post the string( 'What are your hobbies?' ).

// the the third condition wieghs the boolean value of the 'let isStudent', and if the value is an absolute true, console.log posts ( 'Welome to prime' ).

// the final condition is the else, and if none of the conditions are met by the values in the previous three conditions, console.log will post ( 'How about the weather?' ).

// console will latch on to the first conditional that is met, and post the string associated with it. In this instance, console.log will post ( 'Welcome to Prime!' )
// because let zip variable is not met in the first compound conditional, where both variables must meet the conditions. Then, neither the boolean variable or the age variable are met. The console proceeds to the third
// condition, and because the boolean variable is true, it posts the string ( 'Welcomd to Prime!'). The else is disregarded because one of the preceeding conditions has been met. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

//There are two ways that we could fix this: the first.
//FIX - the values for the variables are swapped, and should read as follows:
//let colorOne = 'blue';
//let colorTwo = 'red';

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - added variable 'colorTwo = 'purple';' to the conditional, and changed the value to equal pruple instead of red.
// should be: colorTwo = 'purple';

// I'd also tacked on a 'console.log(colorOne)' to post the result of purple, though we could also change the variable inside the console log to colorTwo,
// and get the same string value 'purple'.
if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'red';
  
}


/Other potential solution:
// FIX - We could also do away with changing the variables inside the conditional by adding a console.log, and having it post a string if the boolean conditional is met
// by simply using 'purple' as a string will then post the result. If we do need purple to have a value, we could utilize a third variable, but I did not include that
// since there is no indication that we will need one at this point in time. 

let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
    console.log('Purple');
  }


*/


//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// FIX our first step is to change the time value from a constant to a variable,  and since time changes, the variable should read:
let time = 4;

let temp = 40;
const time = 4;

// Fix our second step is to change the either/or condition || into &&, since both conditions need to be met in order for the console to log the string. It should read:
if (temp >39 && time >= 4)

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}

// FIXED, the code should read as follows:
let temp = 40;
let time = 4;

if (temp > 39 && time >=4) {
  console.log( 'throw away the food!' );
}
*/



//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*

//FIX since both values of 21 are listed as variables, the constant needs to be changed to let minAge = 21;. However, if the minAge is intended to never change,
//then constant would be a good choice const minAge = 21;

let age = 21;
const minAge = 21;

//FIX the provided conditional reads: if min age is less than or equal to age, console will log 'no entry.' Since we want the console to post the string 'enter' if 
//the age value is equal to or greater than the minAge value, we are going to need to make some adjustments:
if(age >= minAge){
  console.log( 'enter' );
}else{
  console.log( 'no entry');
}
//FIX for my own readability, I swapped the variables minAge and age. Otherwise, it could be read as follows: 
if(minAge >= age) {
  console.log ( 'no entry' );
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

