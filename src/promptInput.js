const inquirer = require('inquirer'); // import the inquirer.js library

// accepts the prompt text to display on the command line, and a flag to make input required 
const promptInput = function (message, required = false) {
    return inquirer.prompt([{
        name: "val",
        type: "input",
        message: message,
        validate: input => (input.length > 0 || !required) ||  'This field is required. Please try again...' 
    }])
    .then(answer => answer.val);
}


module.exports = promptInput;  // export the function