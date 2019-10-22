const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    async prompting() {
        const answers = await this.prompt([
            {
                type: 'input',
                name: 'appName',
                message: 'What is the name of your CLI? (This will be the root command)'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Describe your CLI'
            },
            {
                type: 'input',
                name: 'author',
                message: 'What is your name?'
            }
        ]);

        this.log('app name', answers.appName);
        this.log('description', answers.description);

        this.parameters = {
            ...this.parameters,
            ...answers
        };
    }

    writeFile(filename) {
        this.fs.copyTpl(
            this.templatePath('filename'),
            this.destinationPath(filename),
            { title: 'Copying ' + filename }
        );
    }

    end() {
        this.writeFile('.eslintrc');
        this.writeFile('.gitignore');
        this.writeFile('.nvmrc');
        this.writeFile('index.js');
        this.writeFile('package.json');
        this.writeFile('README.md');
    }
};
