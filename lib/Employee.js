const {v4: uuidv4} = require("uuid");

class Employee {
    #name;
    #id;
    #email;

    constructor(name, email){
        this.setName(name);
        this.setId(uuidv4()); // generate a unique id
        this.setEmail(email);
    }

    getName(){
        return this.#name;        
    }
    setName(name){
        this.#name = name;
    }

    getId(){
        return this.#id;        
    }
    setId(id){
        this.#id = id;       
    }

    getEmail(){
        return this.#email;        
    }
    setEmail(email){
        this.#email = email;
    }

    getRole(){
        return 'Employee';        
    }
}

module.exports = Employee;