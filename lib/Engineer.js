const Employee = require('./Employee.js');

class Engineer extends Employee{
    #gitHubUserName;

    constructor(name, email, gitHubUserName){
        super(name, email);
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

    toString(){
        return super.toString() + 
            `Role:   \t${this.getRole()}` +
            `\nGitHub: \t${this.getGitHubUserName()}` +
            `\nGitHub Url: \t${this.getGitHub()}`
    }
}

module.exports = Engineer;