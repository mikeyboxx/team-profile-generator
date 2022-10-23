const Employee = require('./Employee.js');

class Manager extends Employee{
    #officeNumber;

    constructor(name, email, officeNumber){
        super(name, email);
        this.setOfficeNumber(officeNumber);
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

    toString(){
        return super.toString() + 
            `Role:   \t${this.getRole()}` +
            `\nOffice Nbr: \t${this.getOfficeNumber()}`
    }
}

module.exports = Manager;