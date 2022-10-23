
const chalk = require('chalk');
const inquirer = require('inquirer');
// const Manager = require('./lib/Manager.js');
// const Intern = require('./lib/Intern.js');
// const Engineer = require('./lib/Engineer.js');
const Team = require('./lib/Team.js');
// const promptInput = require('./src/promptInput.js');
// const promptList = require('./src/promptList.js');


const team = new Team();

team.buildTeam();


// (async function buildTeam(){
//     const employees = [];

//     const name =  await promptInput("Please Enter the Manager's Name:\n", true);
//     const email =  await promptInput("Please Enter the Manager's Email:\n", true);
//     const officeNumber = await promptInput("Please Enter the Manager's Office Number:\n", true);
    
//     employees.push(new Manager(name, email, officeNumber));
//     console.log(`Manager added successfully!\nid = ${employees[0].getId()}\n\n`);
    
//     let choice = '';
    
//     while (choice !== 'Finish building my team'){
//         choice = await promptList("Which team member would you like to add to the team?", ['Engineer', 'Intern', 'Finish building my team']);
        
//         if (choice==='Engineer'){
//             const name =  await promptInput("Please Enter the Engineer's Name:\n", true);
//             const email =  await promptInput("Please Enter the Engineer's Email:\n", true);
//             const gitHub = await promptInput("Please Enter the Engineer's GitHub username:\n", true);
//             employees.push(new Engineer(name, email, gitHub));
//             console.log(`Engineer added successfully!\nid = ${employees[employees.length-1].getId()}\n\n`);
//         }
//         else if (choice==='Intern'){
//             const name =  await promptInput("Please Enter the Intern's Name:\n", true);
//             const email =  await promptInput("Please Enter the Intern's Email:\n", true);
//             const school = await promptInput("Please Enter the Intern's School name:\n", true);
//             employees.push(new Intern(name, email, school));
//             console.log(`Intern added successfully!\nid = ${employees[employees.length-1].getId()}\n\n`);

//         } else break;
//     }

//     console.log('Id' + '\t' + 'Name' + '\t' + 'Email' + '\t' + 'Role');
//     console.log('-----------------------' + '\t' + '------------' + '\t' + '----------------' + '\t' + '---------');
//     for(const employee of employees)
//         console.log(employee.getId() + '\t' + employee.getName() + '\t' + employee.getEmail() + '\t' + employee.getRole());
// });

// A) Prompt for Manager Info (name, email)
//    validate input - if not valid prompt again
//    generate Manager object
//    add to employees array
//
// B) Prompt to add Engineer, Intern, or finish building my team.
//    if Engineer is selected then Prompt for name, emal, and github username, return to menu B
//    if Intern is selected then Prompt for name, email, and school, return to menu B
//    if Finish is selected then HTML is generated and saved in same directory 
