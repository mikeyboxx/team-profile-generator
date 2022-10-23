const Employee = require('./lib/Employee.js');

const emp = new Employee('mike', '01', 'dsdds');
console.log(
    emp.getName(),
    emp.getId(),
    emp.getEmail());