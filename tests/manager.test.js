const {v4: uuidv4} = require("uuid");
const Manager = require('../lib/Manager.js');

// override/intercept the behavior of uuid. We do not want to generate a unique id for the tests
jest.mock("uuid");

describe("Manager", () => {
    // setup test data used by some tests (i.e ARRANGE)
    const name = "Mike";
    const email = "happyanddebtfree@gmail.com";
    const officeNumber = '11111';
    uuidv4.mockReturnValue('123456789');
    const employee = new Manager(name, email, officeNumber);
    
    describe("Initialization", () => {
        it("should create an object with a name, email, office number, and a generated id being private, and only accessed through getters", () => {
            // this tests the getters
            expect(employee.getName()).toEqual(name);
            expect(employee.getEmail()).toEqual(email);
            expect(employee.getId()).toEqual('123456789');
            expect(employee.getOfficeNumber()).toEqual(officeNumber);

            // this tests the private fields. they should be 'invisible'
            expect(employee.name).toEqual(undefined);
            expect(employee.email).toEqual(undefined);
            expect(employee.id).toEqual(undefined);
            expect(employee.officeNumber).toEqual(undefined);
        });
   

        it("should throw an error, if provided no arguments", () => {
            const cb = () => new Manager();
        
            expect(cb).toThrow();
        });
    
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Manager(2, "happyanddebtfree@gmail.com", '11111');
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  

        it("should throw an error if 'name' is an empty string", () => {
            const cb = () => new Manager("", "happyanddebtfree@gmail.com", '11111');
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Manager("Mike", 2, '11111');
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  

        it("should throw an error if 'email' is an empty string", () => {
            const cb = () => new Manager("Mike", "", '11111');
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  

        it("should throw an error if 'officeNumber' is not a string", () => {
            const cb = () => new Manager("Mike","happyanddebtfree@gmail.com", 2);
            const err = new Error("Expected parameter 'officeNumber' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  

        it("should throw an error if 'officeNumber' is an empty string", () => {
            const cb = () => new Manager("Mike", "happyanddebtfree@gmail.com", "");
            const err = new Error("Expected parameter 'officeNumber' to be a non-empty string");

            expect(cb).toThrowError(err);
        });  
    });

    describe("getRole()", () => {
        it("should always return type 'Manager'", () => {
            expect(employee.getRole()).toEqual('Manager');
        });
    });

    describe("toString()", () => {
        it("should always return a formatted string of all properties and their values", () => {
            expect(employee.toString())
                .toEqual(`id:   \t\t${employee.getId()}\n` +
                        `name: \t\t${employee.getName()}\n` +
                        `email:\t\t${employee.getEmail()}\n` +
                        `Role:   \t${employee.getRole()}` +
                        `\nOffice Nbr: \t${employee.getOfficeNumber()}`);
        });
    });
});