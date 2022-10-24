const {v4: uuidv4} = require("uuid");
const Engineer = require('../lib/Engineer.js');

jest.mock("uuid");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, email, github username, and a generated id being private, and only accessed through getters", () => {
        const name = "Mike";
        const email = "happyanddebtfree@gmail.com";
        const gitHubUserName = 'mikeyboxx';

        uuidv4.mockReturnValue('123456789');

        const employee = new Engineer(name, email, gitHubUserName);
        
        expect(employee.getName()).toEqual(name);
        expect(employee.getEmail()).toEqual(email);
        expect(employee.getId()).toEqual('123456789');
        expect(employee.getGitHubUserName()).toEqual(gitHubUserName);

        expect(employee.name).toEqual(undefined);
        expect(employee.email).toEqual(undefined);
        expect(employee.id).toEqual(undefined);
        expect(employee.gitHubUserName).toEqual(undefined);
        });
    })

    it("should throw an error, if provided no arguments", () => {
        const cb = () => new Engineer();
       
        expect(cb).toThrow();
    });
  
    it("should throw an error if 'name' is not a string", () => {
        const cb = () => new Engineer(2, "happyanddebtfree@gmail.com", 'mikeyboxx');
        const err = new Error("Expected parameter 'name' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'name' is an empty string", () => {
        const cb = () => new Engineer("", "happyanddebtfree@gmail.com", 'mikeyboxx');
        const err = new Error("Expected parameter 'name' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'email' is not a string", () => {
        const cb = () => new Engineer("Mike", 2, 'mikeyboxx');
        const err = new Error("Expected parameter 'email' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'email' is an empty string", () => {
        const cb = () => new Engineer("Mike", "", 'mikeyboxx');
        const err = new Error("Expected parameter 'email' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'gitHubUserName' is not a string", () => {
        const cb = () => new Engineer("Mike","happyanddebtfree@gmail.com", 2);
        const err = new Error("Expected parameter 'gitHubUserName' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  

    it("should throw an error if 'gitHubUserName' is an empty string", () => {
        const cb = () => new Engineer("Mike", "happyanddebtfree@gmail.com", "");
        const err = new Error("Expected parameter 'gitHubUserName' to be a non-empty string");

        expect(cb).toThrowError(err);
    });  
});