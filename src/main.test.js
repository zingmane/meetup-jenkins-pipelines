var assert = require('assert');

describe('Main App Tests', function() {

  it('calculation', function() {
    assert.equal(2 + 2, 4);
  });

  it('out of bounds', function() {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  // fail
  // it('out of bounds', function() {
  //   assert.equal(1 + 1, 3);
  // });

});

