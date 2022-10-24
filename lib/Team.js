const chalk = require('chalk');
const Manager = require('./Manager.js');
const Intern = require('./Intern.js');
const Engineer = require('./Engineer.js');
const promptInput = require('../src/promptInput.js');
const promptList = require('../src/promptList.js');

class Team {
    #employees ;
    #html;

    constructor(){
        this.#employees = [];
        this.#html = '';
    }

    #buildHTML(){
        let htmlStr = '';
        htmlStr+= 
        `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
                <script src="https://kit.fontawesome.com/35f1ed5062.js" crossorigin="anonymous"></script>
                <title>My Team</title>
            </head>
            <body>
                <section class="hero has-background-danger">
                    <div class="hero-body ">
                        <h1 class="title has-text-white has-text-centered is-size-2">
                            My Team
                        </h1>
                    </div>
                </section>
                <section class="section">
                    <div class="is-flex is-flex-wrap-wrap is-justify-content-space-around m-0 p-0">`;
        // generate cards
        for(const employee of this.#employees){
            const role = employee.getRole();
            htmlStr+=
                `<div class="card has-background-white-ter">
                    <header class="card-header is-flex is-flex-direction-column has-background-info pl-3">
                        <h2 class="card-header-title has-text-white is-size-3 pb-0 ">${employee.getName()}</h2>
                        <h2 class="card-header-title has-text-white is-size-5 pt-0">`;
            switch(role){
                case 'Manager': htmlStr+=`<i class="fa-solid fa-mug-hot"></i>`;
                    break;
                case 'Engineer': htmlStr+=`<i class="fa-solid fa-glasses"></i>`;
                    break;
                case 'Intern': htmlStr+=`<i class="fa-solid fa-user-graduate"></i>`;
                    break;
            }    
            htmlStr+=`<span class="ml-1">${role}</span>
                        </h2>
                    </header>
                    <div class="card-content is-flex p-4">
                        <div class="card content is-flex is-flex-direction-column p-4">
                            <p>ID: <span>${employee.getId()}</span></p>
                            <hr>
                            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>`;
            switch(role){
                case 'Manager': 
                    htmlStr+=`<p>Office number: <span>${employee.getOfficeNumber()}</span></p>`;
                    break;
                case 'Engineer': 
                    htmlStr+=`<p>GitHub: <a href="${employee.getGitHub()}" id="gitHubUrl">${employee.getGitHubUserName()}</a></p>`;
                    break;
                case 'Intern': 
                    htmlStr+=`<p>School: <span>${employee.getSchool()}</span></p>`;
                    break;
            }
            htmlStr+= `</div>
                    </div>
                </div>`;
        }
        htmlStr+=`</div>
               </section>
            </body>
        </html>`;

        return htmlStr;
    }

    buildTeam(){ return new Promise((resolve,reject)=>{
        (async ()=>{
            console.clear();
            console.log(chalk.green(`Welcome to the Team Profile Generator!\n`));
            console.log(chalk.yellow(
                `You will build your team by entering team member's information\n` +
                `and their role on your team. Once finished, a nicely formatted HTML file\n` +
                `will be generated and copied to the ./dist/ directory. The system will generate\n` +
                `a unique ID for every member of the team, and will output the data on the screen.\n`));

            this.#employees.push(new Manager(
                await promptInput("Please Enter the Manager's Name:", true), 
                await promptInput("Please Enter the Manager's Email:", true), 
                await promptInput("Please Enter the Manager's Office Number:", true)));

            console.log(
                chalk.green(`\nManager added successfully!\n`)+
                chalk.yellow(`${this.#employees.at(-1).toString()}\n`));
            
            let choice = '';
            while (choice !== 'Finished'){
                choice = await promptList("\nWhich team member would you like to add to the team?", ['Engineer', 'Intern', 'Finished']);
                
                if (choice==='Engineer'){
                    this.#employees.push(new Engineer(
                        await promptInput("Please Enter the Engineer's Name:", true), 
                        await promptInput("Please Enter the Engineer's Email:", true), 
                        await promptInput("Please Enter the Engineer's GitHub username:", true)));

                    console.log(
                        chalk.green(`\nEngineer added successfully!\n`)+
                        chalk.yellow(`${this.#employees.at(-1).toString()}\n`));
                }
                else if (choice==='Intern'){
                    this.#employees.push(new Intern(
                        await promptInput("Please Enter the Intern's Name:", true), 
                        await promptInput("Please Enter the Intern's Email:", true), 
                        await promptInput("Please Enter the Intern's School name:", true)));

                    console.log(
                        chalk.green(`\nIntern added successfully!\n`)+
                        chalk.yellow(`${this.#employees.at(-1).toString()}\n`));
                    } else break;
                }
            this.#html =  this.#buildHTML();
            
            resolve(true);   // resolve when user chooses 'Finished'
        })();      // immediately invoked function expression (IIFE)
    })};

    getEmployees(){
        return this.#employees;
    }

    getHTML(){
        return this.#html;
    }

    toString(){
        return this.#employees.reduce((prev, curr) => prev + curr.toString() + '\n\n','');
    }
}

module.exports = Team;