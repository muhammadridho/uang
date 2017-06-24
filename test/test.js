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

describe('Check function converter', () => {
  it('10000 should return Sepuluh Ribu', function() {
       expect(uang.toWords(10000)).to.equal('Sepuluh Ribu rupiah')
  })
  it('30000000 should return Sepuluh Ribu', function() {
       expect(uang.toWords(30000000)).to.equal('Tiga Puluh Juta rupiah')
  })
  it('30000000 should return Sepuluh Ribu', function() {
       expect(uang.toWords(30000000)).to.equal('Tiga Puluh Juta rupiah')
  })
  it('3566775431 should return Sepuluh Ribu', function() {
       expect(uang.toWords(3566775431)).to.equal('Tiga Miliar Lima Ratus Enam Puluh Enam Juta Tujuh Ratus Tujuh Puluh Lima Ribu Empat Ratus Tiga Puluh Satu rupiah')
  })
  it('99678665434 should return Sepuluh Ribu', function() {
       expect(uang.toWords(99678665434)).to.equal('Sembilan Puluh Sembilan Miliar Enam Ratus Tujuh Puluh Delapan Juta Enam Ratus Enam Puluh Lima Ribu Empat Ratus Tiga Puluh Empat rupiah')
  })
  it('67xx31 should return 0 Rupiah', function() {
       expect(uang.toWords('67xx31')).to.equal('0 Rupiah')
  })

})
