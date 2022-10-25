const chalk = require('chalk');                   // cli color object
const Manager = require('../lib/Manager.js');     // Manager class
const Intern = require('../lib/Intern.js');       // Intern class
const Engineer = require('../lib/Engineer.js');   // Engineer class
const promptInput = require('../src/promptInput.js');  // helper function
const promptList = require('../src/promptList.js'); // helper function

// This function collects user input from the command line by prompting the user for team member information. For every user type, a corresponding team member object is created and pushed on to an employee array, which is returned/resolved by the Promise.
const buildTeam = ()=> { 
    return new Promise((resolve,reject)=>{
        (async ()=>{
            const team = [];
            let employee = {};

            console.log(chalk.green(`Welcome to the Team Profile Generator!\n`));
            console.log(chalk.yellow(`You will build your team by entering team member's information ` +
                `and their role on your team. \nOnce finished, a nicely formatted HTML file ` +
                `with your team will be generated and copied to the ./dist/ directory. \nThe system will generate ` +
                `a unique ID for every member of the team, and will output the data on the screen.\n`));

            // Create a Manager object, by passing user input collected from the command line, to it's constructor arguments.   
            employee = 
                new Manager(
                    await promptInput("Please Enter the Manager's Name:", true), 
                    await promptInput("Please Enter the Manager's Email:", true), 
                    await promptInput("Please Enter the Manager's Office Number:", true));

            team.push(employee);

            console.log(
                chalk.green(`\nManager added successfully!\n`)+
                chalk.yellow(`${employee.toString()}\n`));
            
            // User must select one of three options to create Engineer, Intern, or Finished). Will keep on prompting until Finished is selected.
            let choice = '';
            while (choice !== 'Finished'){
                choice = await promptList("\nWhich team member would you like to add to the team?", ['Engineer', 'Intern', 'Finished']);
                
                // Create a Engineer object, by passing user input collected from the command line, to it's constructor arguments.   
                if (choice==='Engineer'){
                    employee = 
                        new Engineer(
                            await promptInput("Please Enter the Engineer's Name:", true), 
                            await promptInput("Please Enter the Engineer's Email:", true), 
                            await promptInput("Please Enter the Engineer's GitHub username:", true))

                    team.push(employee);

                    console.log(
                        chalk.green(`\nEngineer added successfully!\n`)+
                        chalk.yellow(`${employee.toString()}\n`));
                }
                // Create a Intern object, by passing user input collected from the command line, to it's constructor arguments.   
                else if (choice==='Intern'){
                    employee = 
                        new Intern(
                            await promptInput("Please Enter the Intern's Name:", true), 
                            await promptInput("Please Enter the Intern's Email:", true), 
                            await promptInput("Please Enter the Intern's School name:", true));

                    team.push(employee);

                    console.log(
                        chalk.green(`\nIntern added successfully!\n`)+
                        chalk.yellow(`${employee.toString()}\n`));
                    } else break;
                }
            
            resolve(team);  // returns an array of team member, when user chooses 'Finished'
        })();  // immediately invoked function expression (IIFE)
})};

module.exports = buildTeam;