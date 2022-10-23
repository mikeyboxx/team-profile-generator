
const chalk = require('chalk');
const inquirer = require('inquirer');
const Team = require('./lib/Team.js');


const team = new Team();

team.buildTeam()
    .then(()=>{
        console.log(team.toString());
    });


// A) Prompt for Manager Info (name, email)
//    validate input - if not valid prompt again
//    generate Manager object
//    add to employees array
//
// B) Prompt to add Engineer, Intern, or finish building my team.
//    if Engineer is selected then Prompt for name, emal, and github username, return to menu B
//    if Intern is selected then Prompt for name, email, and school, return to menu B
//    if Finish is selected then HTML is generated and saved in same directory 
