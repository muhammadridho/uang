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

describe('Check function formatter', () => {
  it('1000 should return Rp. 1.000', function() {
       expect(uang.formatter(1000)).to.equal('Rp. 1.000')
  })
  it('100 should return Rp. 100', function() {
       expect(uang.formatter(100)).to.equal('Rp. 100')
  })
  it('ff should return Rp. 0', function() {
       expect(uang.formatter('1x0')).to.equal('Rp. 0')
  })
  it('10.0 should return Rp. 0', function() {
       expect(uang.formatter('1x0')).to.equal('Rp. 0')
  })
  it('0,1 should return Rp. 0', function() {
       expect(uang.formatter('1x0')).to.equal('Rp. 0')
  })
  it('empty should return Rp. 0', function() {
       expect(uang.formatter()).to.equal('Rp. 0')
  })
})
