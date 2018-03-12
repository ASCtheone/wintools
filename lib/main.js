'use strict';

let packageJson = require('./../package.json');
let regedit = require('regedit');
let guid = require('guid');
let inquirer = require('inquirer');

module.exports = {
    version : packageJson.version,
    winlink : args => {
        let ACTIONS = {
            CREATE : {
                short: 'C',
                long: 'CREATE'
            },
            UPDATE : {
                short: 'U',
                long:'UPDATE'
            },
            DELETE : {
                short: 'D',
                long:'DELETE'
            },
            GET : {
                short: 'G',
                long:'GET'
            }
        };
        let name = args.name;
        let path = args.path;
        let icon = args.icon;
        let action = args.action;
        let askQuestions = () => {
            if(action) {
                return Promise.resolve(action);
            } else {
                let questionss = [{
                    name: 'action',
                    type: 'list',
                    message: 'Choose the actions you want to run:',
                    choices: ACTIONS,
                    validate: function(value) {
                        if (value.length) {
                            return true;
                        } else {
                            return 'Please select the actions';
                        }
                    }
                }];
                return inquirer.prompt(questionss);
            }
            let questions = [];
            /*

            todo :: check if we ge actions from the command line
            todo :: get the action and use it to ask proper questions
            todo :: add the corresponding keys
            todo :: generating GUID
            todo :: add the ability to add environment variables
            todo :: add the ability to add to the PATH
            HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment
            HKEY_CURRENT_USER\Environment
            */
/*
            if(!name) {
                questions.push({
                    name: 'name',
                    type: 'input',
                    message: 'Enter the name of the winlink:',
                    validate: function(value) {
                        if (value.length !== 0) {
                            return true;
                        } else {
                            return 'Please enter the name';
                        }
                    }
                });
            }
            if(!path) {
                questions.push({
                    name: 'path',
                    type: 'input',
                    message: 'Enter the path of the winlink:',
                    validate: function(value) {
                        if (value.length !== 0) {
                            return true;
                        } else {
                            return 'Please enter the path';
                        }
                    }
                });
            }
            if(!icon) {
                questions.push({
                    name: 'icon',
                    type: 'input',
                    message: 'Enter the icon path of the winlink:',
                    validate: function(value) {
                        if (value.length !== 0) {
                            return true;
                        } else {
                            return 'Please enter the icon path';
                        }
                    }
                });
            }
            //return inquirer.prompt(questions);

            */
        };
        askQuestions().then(rr => {
            console.log(rr);
        });
    }
}