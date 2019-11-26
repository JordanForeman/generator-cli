module.exports = [
    {
        type: 'input',
        name: 'appName',
        message: 'What is the name of your CLI? (This will be the root command)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your CLI:'
    },
    {
        type: 'input',
        name: 'author',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'owningOrganization',
        message: 'What is the name of the user/organization in GitHub where the source code will live?'
    }
];
