'use strict';

let regedit = require('regedit');
let guid = require('guid');
let inquirer = require('inquirer');
let chalk = require('chalk');
let figlet = require('figlet');
let ACTIONS = [
    {
        short: 'C',
        name: 'CREATE'
    }, {
        short: 'U',
        name:'UPDATE'
    }, {
        short: 'D',
        name:'DELETE'
    }, {
        short: 'G',
        name:'GET'
    }
];
let winname, path, icon, action;

let questions = {
    ACTION : {
        name: 'action',
        type: 'list',
        message: 'Choose the actions you want to run:',
        choices: ACTIONS,
        validate: value => value.length ? true : 'Please select the actions'
    },
    NAME : {
        name: 'name',
        type: 'input',
        message: 'Enter the name of the winlink:',
        validate: value => value.length !== 0 ? true : 'Please enter the name'
    },
    PATH : {
        name: 'path',
        type: 'input',
        message: 'Enter the path of the winlink:',
        validate: value => value.length !== 0 ? true : 'Please enter the path'
    },
    ICON : {
        name: 'icon',
        type: 'input',
        message: 'Enter the icon path of the winlink:',
        validate: value => value.length !== 0 ? true : 'Please enter the icon path'
    }
};

let showWINTOOLS = () => Promise.resolve(console.log(chalk.green(figlet.textSync('- WIN TOOLS -', {horizontalLayout: 'full'}))));

let parseParams = args => {
    winname = args.winname;
    path = args.path;
    icon = args.icon;
    action = args.winaction;
};

let askAction = () => action ? action : inquirer.prompt([questions.ACTION]);
let parseAction = actionResult => action = action || actionResult.action;

let askQuestions = () => {
    let questionsToAsk = [];
    !winname ? questionsToAsk.push(questions.NAME) : null;
    !path ? questionsToAsk.push(questions.PATH) : null;
    !icon ? questionsToAsk.push(questions.ICON) : null;
    return inquirer.prompt(questionsToAsk);
};

let parseQuestions = questionResult => {
    winname = winname || actionResult.name;
    path = path || actionResult.path;
    icon = icon || actionResult.icon;
};


module.exports = args => showWINTOOLS().bind(args, parseParams).then(askAction).then(askQuestions).then(parseAction).then(parseQuestions).then(() => console.log(winname, path, icon, action));
module.exports2 = args => {
    name = args.name;
    path = args.path;
    icon = args.icon;
    action = args.action;
    let askQuestions = () => {

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