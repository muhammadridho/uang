var uang = require('../index')
var expect = require('chai').expect


describe('Check function valid', () => {
  it('should return true', function() {
       expect(uang.isValid(100)).to.equal(true)
  })
  it('100.0 should return false', function() {
       expect(uang.isValid('100.0')).to.equal(false)
  })
  it('-10 should return false', function() {
       expect(uang.isValid('-10')).to.equal(false)
  })
  it('1xx should return false', function() {
       expect(uang.isValid('1xx')).to.equal(false)
  })
})
