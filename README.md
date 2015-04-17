# ng-pack
Helps you to create and publish your [Angular](http://angularjs.org/) components quickly using [Gulp](http://gulpjs.com/).

- [Gulpfile](http://github.com/sytac/ng-pack/blob/master/app/templates/_gulpfile.js) with tasks to watch, test & build.
- [Livereload](https://www.npmjs.com/package/gulp-livereload)
- [SASS](https://www.npmjs.com/package/gulp-sass)
- Ready to publish [bower.json](http://bower.io/docs/creating-packages/#bowerjson).
- Complete testing environment: [Karma](http://karma-runner.github.io/) + [Protractor](http://angular.github.io/protractor) + [Istanbul](https://github.com/gotwarlost/istanbul)
- [Travis CI](https://travis-ci.org) & [Coveralls](https://coveralls.io/) integration

## Getting Started
Install [Yeoman](http://yeoman.io/) and **ng-pack** generator:

```bash
npm install -g yo
npm install -g generator-ng-pack
```

Initialize the generator:

```bash
yo ng-pack
```

## Usage
1. Setup your E2E testing environment for once: ``npm install -g protractor && webdriver-manager update --standalone``
2. Run ``gulp watch``, go to [http://localhost:8080/demo/index.html](http://localhost:8080/demo/index.html) and play on **/src**.
3. Use ``gulp test-unit`` or ``gulp test-e2e`` to execute your tests. (Be sure that selenium driver is up: ``webdriver-manager start``)
4. Finally, create your distribution files: ``gulp build``
5. Publish!

## Live Examples
- [carouselar](https://github.com/tameraydin/carouselar)
- [ng-clear-button](https://github.com/tameraydin/ng-clear-button)
- [ng-inline-edit](https://github.com/tameraydin/ng-inline-edit)

## License

MIT
