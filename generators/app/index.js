'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var mkdirp = require('mkdirp');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fabulous ' + chalk.red('generator-page-tool') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    
    this.fs.copy(
      this.templatePath('gulpfile.js'),
      this.destinationPath('gulpfile.js')
    );

    this.fs.copy(
      this.templatePath('package.json'),
      this.destinationPath('package.json')
    );
    
    this.fs.copy(
      this.templatePath('readme.md'),
      this.destinationPath('readme.md')
    );
    
    this.fs.copy(
      this.templatePath('animate.css'),
      this.destinationPath('app/css/animate.css')
    );
    
    this.fs.copy(
      this.templatePath('reset.css'),
      this.destinationPath('app/css/reset.css')
    );

    this.fs.copy(
      this.templatePath('main.less'),
      this.destinationPath('app/less/main.less')
    );

    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('app/index.html')
    );

    this.fs.copy(
      this.templatePath('jquery-3.1.1.min.js'),
      this.destinationPath('app/js/vendor/jquery-3.1.1.min.js')
    );

    mkdirp('app/assets');
    mkdirp('app/images');
    mkdirp('app/css/plugins');
    mkdirp('app/js/plugins');
    mkdirp('app/rev');

  },

  install: function () {
    this.installDependencies();
  }
});
