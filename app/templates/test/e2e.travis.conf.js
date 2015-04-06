exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/e2e/<%= moduleName %>.js'],
  capabilities: {
    'browserName': 'firefox'
  }
};
