const {v4: uuidv4} = require("uuid");
const Intern = require('../lib/Intern.js');

jest.mock("uuid");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, email, school, and a generated id being private, and only accessed through getters", () => {
        const name = "Mike";
        const email = "happyanddebtfree@gmail.com";
        const school = 'Brooklyn College';

        uuidv4.mockReturnValue('123456789');

        const employee = new Intern(name, email, school);
        
        expect(employee.getName()).toEqual(name);
        expect(employee.getEmail()).toEqual(email);
        expect(employee.getId()).toEqual('123456789');
        expect(employee.getSchool()).toEqual(school);

        expect(employee.name).toEqual(undefined);
        expect(employee.email).toEqual(undefined);
        expect(employee.id).toEqual(undefined);
        expect(employee.school).toEqual(undefined);
        });
    })

    it("should throw an error, if provided no arguments", () => {
        const cb = () => new Intern();
       
        expect(cb).toThrow();
    });
  
    it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Intern(2, "happyanddebtfree@gmail.com", 'Brooklyn College');
        const err = new Error("Expected parameter 'name' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'name' is an empty string", () => {
        const cb = () => new Intern("", "happyanddebtfree@gmail.com", 'Brooklyn College');
        const err = new Error("Expected parameter 'name' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'email' is not a string", () => {
        const cb = () => new Intern("Mike", 2, 'Brooklyn College');
        const err = new Error("Expected parameter 'email' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'email' is an empty string", () => {
        const cb = () => new Intern("Mike", "", 'Brooklyn College');
        const err = new Error("Expected parameter 'email' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'school' is not a string", () => {
        const cb = () => new Intern("Mike","happyanddebtfree@gmail.com", 2);
        const err = new Error("Expected parameter 'school' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'school' is an empty string", () => {
        const cb = () => new Intern("Mike", "happyanddebtfree@gmail.com", "");
        const err = new Error("Expected parameter 'school' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  
});