const assert = require('chai').assert;
const data = require('../dataId');

dataId = data.dataId();
// addNumbers = app.addNumbers(5, 5);

describe('dataId', function() {
  describe('dataId()', function() {
    // it('sayHello should return hello', function() {
    //   assert.equal(sayHello, 'hello');
    // });

    it('dataId should be a string', function() {
      let result = dataId;
      assert.typeOf(result, 'string');
    });
  });

  //   describe('addNumbers()', function() {
  //     it('addNumbers should be above 5', function() {
  //       assert.isAbove(addNumbers, 5);
  //     });

  //     it('addNumbers should return a number', function() {
  //       let result = app.addNumbers();
  //       assert.typeOf(result, 'number');
  //     });
  //   });
});
