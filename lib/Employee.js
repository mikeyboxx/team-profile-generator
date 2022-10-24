const {v4: uuidv4} = require("uuid");

class Employee {
    #name;
    #id;
    #email;

    constructor(name, email){
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }

        this.#name = name;
        this.#email = email;
        this.#id = uuidv4(); // generate a unique id
    }

    getName(){
        return this.#name;        
    }

    getId(){
        return this.#id;        
    }

    getEmail(){
        return this.#email;        
    }

    getRole(){
        return 'Employee';        
    }

    toString(){
        return `id:   \t\t${this.getId()}\n` +
               `name: \t\t${this.getName()}\n` +
               `email:\t\t${this.getEmail()}\n`
    }
}

module.exports = Employee;