
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

const getData = new Promise((resolve, reject) => {
    http.get('http://api.fixer.io/latest?base=IDR', res => {
        let body = [],
            data = {},
            output = {}

        res.on('data', chunk => {
            body.push(chunk) //buffer data push into body value
            data = Object.assign({}, JSON.parse(Buffer.concat(body).toString()))
            // at this point, `body` has the entire request body stored in it as a string and transform into json
        })
        res.on('end',() => {
          for (let prop in data.rates) {
            let val = Math.round(1 / data.rates[prop])
            output[prop] = formatter(val)
          }
          resolve(output)
        })
      })
})


const kurs = () => {
  let data = {},
      done = false
  getData.then((output) => {
    data = output
    done = true
  })
  //wait until data has finish
  require('deasync').loopWhile(function(){return !done;});
  return data
}

const tukarNilai = (rupiah,params) => {

}



console.log(kurs());

module.exports = {
  isValid,
  formatter
}
