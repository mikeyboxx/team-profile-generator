class Employee {
    #name;
    #id;
    #email;
    
    constructor(name, id, email){
        this.setName(name);
        this.setId(id);
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