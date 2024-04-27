import inquirer from "inquirer";
//Personal Message: Store a person’s name in a variable,
// and print a message to that person. Your message should be simple, such as,
// “Hello Eric, would you like to learn some Python today?”
let personName=await inquirer.prompt(
    [
        {
            name:"Name",
            tyep:"input",
            message:"enter your name here :"
        }
    ]
);
console.log(` hello ${personName.Name} would you like to learn some python ?`)