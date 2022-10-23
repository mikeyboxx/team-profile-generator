
const chalk = require('chalk');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');

const mike = new Employee('mike', '01', 'zzz_dsdds');
const joe = new Employee('joe', '02', 'yyy_dsdds');
const stella = new Employee('stella', 'www_03', 'dsdds');
const bob = new Employee('bob', '04', 'fff__dsdds');

const walter = new Manager('walter', '05', 'fff__dsdds', '67674');


console.log(
    walter.getName(),
    walter.getId(),
    walter.getEmail(),
    walter.getRole(),
    walter.getOfficeNumber());