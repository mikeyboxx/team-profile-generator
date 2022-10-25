const Employee = require('./Employee.js');

class Manager extends Employee{
    #officeNumber;

    constructor(name, email, officeNumber){
        super(name, email);
        
        // throw an error if arguments are not valid.
        if (typeof officeNumber !== "string" || !officeNumber.trim().length) {
            throw new Error("Expected parameter 'officeNumber' to be a non-empty string");
        }
        
        this.#officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.#officeNumber;
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