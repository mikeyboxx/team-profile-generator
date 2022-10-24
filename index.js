
const chalk = require('chalk');
const fs = require('fs');
const Team = require('./lib/Team.js');

const team = new Team();

team.buildTeam()
    .then(()=>{
        fs.writeFile('./dist/index.html', team.getHTML(), (err=> {
            if (err)
                console.log(err);
            else { 
                console.clear();
                console.log(chalk.green(`\n\nYour Team Profile has been generated!`));
                console.log(chalk.green(`./dist/index.html file has been created!`));
                console.log(chalk.yellow(`\nTeam Members in the index.html file:\n`));
                console.log(chalk.blue(team.toString()));
            }
        }));
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
