const {v4: uuidv4} = require("uuid");
const Manager = require('../lib/Manager.js');

jest.mock("uuid");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, email, office number, and a generated id being private, and only accessed through getters", () => {
        const name = "Mike";
        const email = "happyanddebtfree@gmail.com";
        const officeNumber = '11111';

        uuidv4.mockReturnValue('123456789');

        const employee = new Manager(name, email, officeNumber);
        
        expect(employee.getName()).toEqual(name);
        expect(employee.getEmail()).toEqual(email);
        expect(employee.getId()).toEqual('123456789');
        expect(employee.getOfficeNumber()).toEqual(officeNumber);

        expect(employee.name).toEqual(undefined);
        expect(employee.email).toEqual(undefined);
        expect(employee.id).toEqual(undefined);
        expect(employee.officeNumber).toEqual(undefined);
        });
    })

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