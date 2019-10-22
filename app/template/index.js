#!/usr/bin/env node
'use strict';

const prompt = require('prompt');
const USERNAME = 'username';

const promptSchema = {
    properties: {
        [USERNAME]: {
            message: 'Who are you?',
            required: true
        }
    }
};

function main () {
    prompt.get(promptSchema, function (err, result) {
        if (err) {
            throw err;
        }

        console.log('Hello ' + result[USERNAME]);
        console.log('This is <%= appname %>');
        process.exit(0);
    });
}

main();
