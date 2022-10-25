
const chalk = require('chalk');  // used for changing font color on the CLI terminal             
const fsPromises = require('fs/promises');  // fs with promises
const buildTeam = require('./src/buildTeam.js');   // helper function
const renderHtml = require('./src/renderHtml.js'); // helper function

// Call buildTeam() which returns a Promise, that resolves to an array of team member objects, from user input via Inquirer command-line prompts.
buildTeam()
    .then(team => {  // team is an array of either (Manager, Engineer, or Intern objects)
        console.clear();
        console.log(chalk.green(`\n\nYour Team Profile has been generated!`)); 
        console.log(chalk.blue(`Team Members:`));

        // Call each object's toString() method, returning a formatted string of all properties of that object 
        console.log(chalk.blue(team.reduce((prev, curr) => prev + curr.toString() + '\n\n','')));

        // Call renderHtml() which returns another Promise that resolves to an html string
        return renderHtml(team);  
    })
    .then(html => { // HTML string generated from the array of team member objects
        console.log(chalk.green(`HTML file has been generated!`));

        // write the html string to a file in the /dist/ directory
        return fsPromises.writeFile('./dist/index.html', html);
    })
    .then(()=>{
        console.log(chalk.green(`./dist/index.html file has been created successfully!\n\n`));
    })
    .catch(err=> console.log(err));
