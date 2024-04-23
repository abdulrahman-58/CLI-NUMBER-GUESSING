#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will generate a random number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result

const target: number = Math.floor(Math.random() * 10 +1);
let guess = await inquirer.prompt([{
    name: "answer",
    type : "number",
    message: "Please enter a number between 1-10 :"
}])
if (guess.answer < target){
    console.log("Your guess is too low.");
}  else if (guess.answer > target){
    console.log("Your guess is too high");
} else {
    console.log("You guessed correctly!");
}

