//import inquirer

import  inquirer from 'inquirer';

//currency conversation object

let currencyConversion = {
    "PKR":{
        "USD": 0.0036,
        "GBP": 0.0028,
        "PKR": 1,
    },
    "GBP":{
        "USD": 1.27,
        "GBP": 1,
        "PKR": 353.32,
    },
    "USD":{
        "USD": 1,
        "GBP": 0.79,
        "PKR": 278.52,
    },
}

//prompt user for input

const answer: {
    from: "PKR" | "GBP" | "USD",
    to: "PKR" | "GBP" | "USD",
    amount: number,
} = await inquirer.prompt([{
    type: "list",
    name: "from",
    message: "Please select your currency?",
    choices: ["PKR", "GBP", "USD"]
},
{
    type: "list",
    name: "to",
    message: "Please select your conversion rate?",
    choices: ["PKR", "GBP", "USD"],
},
{
    type: "input",
    name: "amount",
    message: "Please enter the amount you want to convert?",
}]);

//Destructuring user Input

const {from, to, amount} = answer;

//perfor currency conversion

if (from && to && amount){
    let result = currencyConversion[from][to] *amount;
    console.log(`Your conversion from ${from} to ${to} is ${result}`);
    
} else {
    console.log("invalid conversion");
    
}