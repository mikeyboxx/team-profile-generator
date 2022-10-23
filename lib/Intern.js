const Employee = require('./Employee.js');

class Intern extends Employee{
    #school;

    constructor(name, email, school){
        super(name, id, email);
        
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
}

module.exports = Intern;