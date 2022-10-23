const chalk = require('chalk');
const Manager = require('./Manager.js');
const Intern = require('./Intern.js');
const Engineer = require('./Engineer.js');
const promptInput = require('../src/promptInput.js');
const promptList = require('../src/promptList.js');

class Team {
    constructor(){
        this.employees = [];
    }

    buildTeam(){ return new Promise((resolve,reject)=>{
        (async ()=>{
            console.clear();

            this.employees.push(new Manager(
                await promptInput("Please Enter the Manager's Name:", true), 
                await promptInput("Please Enter the Manager's Email:", true), 
                await promptInput("Please Enter the Manager's Office Number:", true)));

            console.log(
                chalk.green(`\nManager added successfully!\n`)+
                chalk.yellow(`${this.employees.at(-1).toString()}\n`));
            
            let choice = '';
            while (choice !== 'Finished'){
                choice = await promptList("\nWhich team member would you like to add to the team?", ['Engineer', 'Intern', 'Finished']);
                
                if (choice==='Engineer'){
                    this.employees.push(new Engineer(
                        await promptInput("Please Enter the Engineer's Name:", true), 
                        await promptInput("Please Enter the Engineer's Email:", true), 
                        await promptInput("Please Enter the Engineer's GitHub username:", true)));

                    console.log(
                        chalk.green(`\nEngineer added successfully!\n`)+
                        chalk.yellow(`${this.employees.at(-1).toString()}\n`));
                }
                else if (choice==='Intern'){
                    this.employees.push(new Intern(
                        await promptInput("Please Enter the Intern's Name:", true), 
                        await promptInput("Please Enter the Intern's Email:", true), 
                        await promptInput("Please Enter the Intern's School name:", true)));

                    console.log(
                        chalk.green(`\nIntern added successfully!\n`)+
                        chalk.yellow(`${this.employees.at(-1).toString()}\n`));
                } else break;
            }
            resolve(true);   // resolve when user chooses 'Finished'
        })();      // immediately invoked function expression (IIFE)
    })};

    buildHTML(){
        
    }

    toString(){
        return this.employees.reduce((prev, curr) => prev + curr.toString() + '\n\n','');
    }
}

module.exports = Team;