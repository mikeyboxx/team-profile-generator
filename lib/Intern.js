const Employee = require('./Employee.js');

class Intern extends Employee{
    #school;

    constructor(name, email, school){
        super(name, email);
        this.setSchool(school);
    }

    getSchool(){
        return this.#school;
    }
    setSchool(school){
        this.#school = school;
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