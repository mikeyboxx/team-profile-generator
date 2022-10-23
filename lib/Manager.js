const Employee = require('./Employee.js');

class Manager extends Employee{
    #officeNumber;

    constructor(name, id, email, officeNumber){
        super(name, id, email);
        
        this.#officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.#officeNumber;
    }
    setOfficeNumber(officeNumber){
        this.#officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;