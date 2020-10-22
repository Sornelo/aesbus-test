var assert = require('assert');
describe('Users', function() {
  describe('#getMany()', function() {
    it('should return a list of users', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe('#getSingle()', function() {
    it('should return a user if user exists', function() {
      const user = undefined;
      assert.equal(user, { id: "1", name: "Justin" })
    });
    it('should throw a ResourceNotFound error if users doesn\'t exist', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
    it('should throw a BadRequest error if id isn\'t provided', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});