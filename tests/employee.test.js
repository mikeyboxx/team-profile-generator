const {v4: uuidv4} = require("uuid");
const Employee = require('../lib/Employee.js');

// override/intercept the behavior of uuid. We do not want to generate a unique id for the tests
jest.mock("uuid");

describe("Employee", () => {
    // setup test data used by some tests (i.e ARRANGE)
    const name = "Mike";
    const email = "happyanddebtfree@gmail.com";
    uuidv4.mockReturnValue('123456789');
    const employee = new Employee(name, email);
    
    describe("Initialization", () => {
        it("should create an object with a name, email, and a generated id being private, and only accessed through getters", () => {
            // this tests the getters
            expect(employee.getName()).toEqual(name);
            expect(employee.getEmail()).toEqual(email);
            expect(employee.getId()).toEqual('123456789');

            // this tests the private fields. they should be 'invisible'
            expect(employee.name).toEqual(undefined);
            expect(employee.email).toEqual(undefined);
            expect(employee.id).toEqual(undefined);
        });
   

        it("should throw an error, if provided no arguments", () => {
            const cb = () => new Employee();
        
            expect(cb).toThrow();
        });
    
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(2, "happyanddebtfree@gmail.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  

        it("should throw an error if 'name' is an empty string", () => {
            const cb = () => new Employee("", "happyanddebtfree@gmail.com");
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee("Mike", 2);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  

        it("should throw an error if 'email' is an empty string", () => {
            const cb = () => new Employee("Mike", "");
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  
    });

    describe("getRole()", () => {
        it("should always return type 'Employee'", () => {
            expect(employee.getRole()).toEqual('Employee');
        });
    });

    describe("toString()", () => {
        it("should always return a formatted string of all properties and their values", () => {
            expect(employee.toString())
                .toEqual(`id:   \t\t${employee.getId()}\n` +
                        `name: \t\t${employee.getName()}\n` +
                        `email:\t\t${employee.getEmail()}\n`);
        });
    });
});