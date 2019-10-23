const Generator = require('yeoman-generator');



function copyTemplateFile(filename) {
    console.log(`Copying ${filename}`);
    const source = this.templatePath(filename);
    const dest = this.destinationPath(`${this.parameters.appName}/${filename}`);

    this.fs.copyTpl(
        source,
        dest,
        this.parameters
    );
}

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.copyTemplateFile = copyTemplateFile.bind(this);
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

    writing() {
        this.copyTemplateFile('.eslintrc');
        this.copyTemplateFile('.gitignore');
        this.copyTemplateFile('.nvmrc');
        this.copyTemplateFile('index.js');
        this.copyTemplateFile('package.json');
        this.copyTemplateFile('README.md');
    }
};
