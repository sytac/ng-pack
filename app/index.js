'use strict';

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var _ = require('lodash');

var NgPackGenerator = yeoman.generators.Base.extend({
  initializing: function() {
    this.log(yosay(
      'Thanks for using ng-pack! Your project will be ready in seconds...'
    ));
  },

  prompting: function() {
    var done = this.async();

    var prompts = [{
      type: 'string',
      name: 'moduleName',
      message: 'What is the name of your component? ',
      default: 'ng-super-component'
    },{
      type: 'string',
      name: 'moduleDesc',
      message: 'A description for your module: ',
      default: 'My very own, super component!'
    },{
      type: 'string',
      name: 'moduleAuthor',
      message: 'Your name: ',
      default: 'Jane Doe'
    },{
      type: 'string',
      name: 'moduleLicense',
      message: 'License type: ',
      default: 'MIT'
    },{
      type: 'confirm',
      name: 'moduleTravis',
      message: 'Do you want .travis.yml to be included? ',
      default: true
    }];

    this.prompt(prompts, function(props) {
      var name = _.deburr(props.moduleName);

      this.moduleName = _.kebabCase(name);
      this.moduleNameCamelCase = _.camelCase(name);
      this.moduleDesc = _.deburr(props.moduleDesc);
      this.moduleAuthor = _.deburr(props.moduleAuthor);
      this.moduleLicense = _.deburr(props.moduleLicense);
      this.moduleTravis = props.moduleTravis;
      done();
    }.bind(this));
  },

  writing: {
    app: function() {
      this.dest.mkdir('demo');
      this.dest.mkdir('src');
      this.dest.mkdir('src/scripts');
      this.dest.mkdir('src/styles');
      this.dest.mkdir('test');
      this.dest.mkdir('test/specs');
      this.dest.mkdir('test/specs/unit');
      this.dest.mkdir('test/specs/e2e');
    },
    projectfiles: function() {
      // root
      this.copy('_editorconfig', '.editorconfig');
      this.copy('_gitignore', '.gitignore');
      if (this.moduleTravis) {
        this.copy('_travis.yml', '.travis.yml');
      }
      this.copy('_package.json', 'package.json');
      this.copy('_bower.json', 'bower.json');
      this.copy('_gulpfile.js', 'gulpfile.js');
      this.copy('_README.md', 'README.md');

      // demo
      this.copy('demo/_index.js', 'demo/index.js');
      this.copy('demo/index.html', 'demo/index.html');
      this.copy('demo/index.css', 'demo/index.css');

      // src
      this.copy('src/scripts/controllers.js', 'src/scripts/controllers.js');
      this.copy('src/scripts/directives.js', 'src/scripts/directives.js');
      this.copy('src/scripts/module.js', 'src/scripts/module.js');
      this.copy('src/styles/main.scss', 'src/styles/' + this.moduleName + '.scss');

      // test
      this.copy('test/e2e.conf.js', 'test/e2e.conf.js');
      if (this.moduleTravis) {
        this.copy('test/e2e.travis.conf.js', 'test/e2e.travis.conf.js');
      }
      this.copy('test/karma.conf.js', 'test/karma.conf.js');
      this.copy('test/specs/unit/main.js', 'test/specs/unit/' + this.moduleName + '.js');
      this.copy('test/specs/e2e/main.js', 'test/specs/e2e/' + this.moduleName + '.js');
    }
  },

  end: function() {
    this.log(yosay(
      'Almost done! Need help? Check out ' + chalk.red('http://github.com/tameraydin/ng-pack')
    ));

    this.installDependencies({
      bower: true,
      npm: true
    });
  }
});

module.exports = NgPackGenerator;