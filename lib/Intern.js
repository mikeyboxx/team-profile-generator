const Employee = require('./Employee.js');

class Intern extends Employee{
    #school;  // this field is private, and can only be accessed within this class

    constructor(name, email, school){
        super(name, email);
        // throw an error if arguments are not valid.
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }

        this.#school = school;
    }

    getSchool(){
        return this.#school;
    }

    getRole(){
        return 'Intern';
    }

    toString(){
        return super.toString() + 
            `Role:   \t${this.getRole()}` +
            `\nSchool: \t${this.getSchool()}`
    }
}

module.exports = Intern;