
const chalk = require('chalk');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');

const mike = new Employee('mike', '01', 'zzz_dsdds');
const joe = new Employee('joe', '02', 'yyy_dsdds');
const stella = new Employee('stella', 'www_03', 'dsdds');
const bob = new Employee('bob', '04', 'fff__dsdds');

const walter = new Manager('walter', '05', 'fff__dsdds', '67674');
const intern1 = new Intern('intern1', '06', 'fff__dsddf77s', '99994');
const engineer1 = new Engineer('Engineer1', '07', 'fxxxx_xxxxxs', 'mikeyboxx');


console.log(
    walter.getName(),
    walter.getId(),
    walter.getEmail(),
    walter.getRole(),
    walter.getOfficeNumber());
console.log(
    intern1.getName(),
    intern1.getId(),
    intern1.getEmail(),
    intern1.getRole(),
    intern1.getSchool());
console.log(
    engineer1.getName(),
    engineer1.getId(),
    engineer1.getEmail(),
    engineer1.getRole(),
    engineer1.getGitHub());