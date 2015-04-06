describe('<%= moduleName %>', function() {

  beforeEach(function() {
    browser.get('http://127.0.0.1:8080/demo/index.html');
  });

  it('should initialize properly', function() {
    var moduleElement = element.all(by.className('<%= moduleName %>'));
    expect(moduleElement.count()).toEqual(1);
  });
});
