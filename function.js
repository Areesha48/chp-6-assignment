// ex 6.1//
function addNumbers(a, b) {
  return a + b;
}

let num1 = 5;
let num2 = 10;

console.log(addNumbers(num1, num2)); 
console.log(addNumbers(7, 3));

// ex 6.2 //
let descriptives = ["amazing", "brilliant", "charming", "dazzling", "extraordinary", "fantastic", "gifted", "handsome", "incredible", "jovial"];
function describeName() {
  
  let name = prompt("Please enter your name:");

  
  let randomIndex = Math.floor(Math.random() * descriptives.length);
  let randomDescriptive = descriptives[randomIndex];

  
  console.log(`You are a ${randomDescriptive} ${name}!`);
}


describeName();

//ex 6.3

let num11 = 10;
let num21 = 5;
let operator = '+';
function calculate(num11, num21, operator) {
  if (operator === '+') {
    return num11 + num21;
  } else if (operator === '-') {
    return num11 - num21;
  } else {
    
    return num11 + num21;
  }
}


console.log(calculate(num11, num21, operator)); 
operator = '-';
console.log(calculate(num11, num21, operator)); 

// Evaluating a number game

let dynamicNumber = Math.floor(Math.random() * 100) + 1;
let userNumber = parseInt(prompt("Enter a number: "));

if (userNumber > dynamicNumber) {
  console.log(`Your number ${userNumber} is greater than the dynamic number ${dynamicNumber}.`);
} else if (userNumber === dynamicNumber) {
  console.log(`Your number ${userNumber} is equal to the dynamic number ${dynamicNumber}.`);
} else {
  console.log(`Your number ${userNumber} is less than the dynamic number ${dynamicNumber}.`);
}
//Friend checker game//


let userName = prompt("Enter a name: ");

switch (userName.toLowerCase()) {
  case "john":
  case "emily":
  case "michael":
  case "sarah":
    console.log(`Yes, ${userName} is a friend!`);
    break;
  default:
    console.log(`Sorry, I don't know ${userName}.`);
}
//Rock Paper Scissors game//
let choices = ["Rock", "Paper", "Scissors"];

let playerChoiceIndex = Math.floor(Math.random() * 3);
let computerChoiceIndex = Math.floor(Math.random() * 3);


let playerChoice = choices[playerChoiceIndex];
let computerChoice = choices[computerChoiceIndex];


let responseMessage = `You chose ${playerChoice}, and the computer chose ${computerChoice}. `;


if (playerChoice === computerChoice) {
  responseMessage += "It's a tie!";
} else if ((playerChoice === "Rock" && computerChoice === "Scissors") ||
           (playerChoice === "Paper" && computerChoice === "Rock") ||
           (playerChoice === "Scissors" && computerChoice === "Paper")) {
  responseMessage += "You win!";
} else {
  responseMessage += "The computer wins!";
}


console.log(responseMessage);