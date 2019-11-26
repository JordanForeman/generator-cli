const Generator = require('yeoman-generator');
const questions = require('./config/inputs');
const files = require('./config/manifest');

function copyTemplateFileTo(srcFilename, destFilename) {
    this.fs.copyTpl(
        this.templatePath(srcFilename),
        this.destinationPath(destFilename),
        this.configuration
    );
}

function copyTemplateFile(filename) {
    this.copyTemplateFileTo(filename, filename);
}

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.copyTemplateFile = copyTemplateFile.bind(this);
        this.copyTemplateFileTo = copyTemplateFileTo.bind(this);
    }

    async prompting() {
        this.configuration = await this.prompt(questions);
        this.destinationRoot(this.configuration.appName);
    }

    writing() {
        files.forEach(this.copyTemplateFile);
        this.copyTemplateFileTo('_gitignore', '.gitignore');
    }

    install() {
        this.npmInstall();
    }
};
