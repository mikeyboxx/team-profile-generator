const Employee = require('./Employee.js');

class Engineer extends Employee{
    #gitHubUserName; // this field is private, and can only be accessed within this class

    constructor(name, email, gitHubUserName){
        super(name, email);

        // throw an error if arguments are not valid.
        if (typeof gitHubUserName !== "string" || !gitHubUserName.trim().length) {
            throw new Error("Expected parameter 'gitHubUserName' to be a non-empty string");
        }
        
        this.#gitHubUserName = gitHubUserName;
    }

    getGitHubUserName(){
        return this.#gitHubUserName;
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