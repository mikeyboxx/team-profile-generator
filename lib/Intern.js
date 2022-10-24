const Employee = require('./Employee.js');

class Intern extends Employee{
    #school;

    constructor(name, email, school){
        super(name, email);

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