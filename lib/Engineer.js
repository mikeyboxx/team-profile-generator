const Employee = require('./Employee.js');

class Engineer extends Employee{
    #gitHubUserName;

    constructor(name, email, gitHubUserName){
        super(name, id, email);
        
        this.setGitHubUserName(gitHubUserName);
    }

    getGitHubUserName(){
        return this.#gitHubUserName;
    }
    setGitHubUserName(gitHubUserName){
        this.#gitHubUserName = gitHubUserName;
    }

    getGitHub(){
        return `https://www.github.com/${this.#gitHubUserName}`;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;