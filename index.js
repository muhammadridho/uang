
const http = require('http')

const isValid = (input) => {
  let pattern = new RegExp(/^\d+$/)
  return pattern.test(input)
}

const formatter = (input, firstWord) => {
  if (!isValid(input)) return `${firstWord || 'Rp.'} 0`

  let nominal = String(input).split('').reverse()

  for (let i = 0 ; i < nominal.length; i++){
    if ((i + 1) % 3 == 0 && i !== nominal.length - 1) {
               nominal.splice(i + 1,0,'.')
    }
  }
  return `${firstWord || 'Rp.'} ${nominal.join('').split('').reverse().join('')}`
}

const kurs = (callback) => {

  http.get('http://api.fixer.io/latest?base=IDR', res => {
      let body = [],
          data = {}
      res.on('data', chunk => {
          body.push(chunk) //buffer data push into body value
          data = Object.assign({}, JSON.parse(Buffer.concat(body).toString()))
          // at this point, `body` has the entire request body stored in it as a string and transform into json
      })
      res.on('end',() => {
        callback(data)
      })
    })
}

var coba = kurs((data) => data)
console.log(coba);


function asyncFunc() {
    return new Promise((resolve, reject) => { // (A)
        setTimeout(() => resolve('DONE'), 100); // (B)
    });
}
let cobx = asyncFunc().then(x => x);
console.log(cobx);

module.exports = {
  isValid,
  formatter
}
