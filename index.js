
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

const toWords = (number) => {
  if (!isValid(number)) return  `0 Rupiah`

  return convertToWords(number)+ 'rupiah'
}

const convertToWords = (number) => {
  let unique = ["", "Satu ", "Dua ", "Tiga ", "Empat ", "Lima ", "Enam ", "Tujuh ", "Delapan ",
              "Sembilan ", "Sepuluh ", "Sebelas "];

  if(number < 12)
    return unique[number];
  else if (number < 20)
    return convertToWords(number - 10) + "Belas ";
  else if (number < 100)
    return convertToWords((number - (number % 10))/10) + "Puluh " + convertToWords(number%10);
  else if (number < 200)
    return "Seratus " + convertToWords(number - 100);
  else if (number < 1000)
    return convertToWords((number - (number % 100))/100) + "Ratus " + convertToWords(number % 100);
  else if (number < 2000)
    return "Seribu " + convertToWords(number - 1000);
  else if (number < 1000000)
    return convertToWords((number - (number % 1000))/1000) + "Ribu " + convertToWords(number % 1000);
  else if (number < 1000000000)
    return convertToWords((number - (number % 1000000))/1000000) + "Juta " + convertToWords(number % 1000000);
  else if (number < 1000000000000)
    return convertToWords((number - (number % 1000000000))/1000000000) + "Miliar " + convertToWords(number % 1000000000);
  else if (number < 1000000000000000)
    return convertToWords((number - (number % 1000000000000))/1000000000000) + "Triliun " + convertToWords(number % 1000000000000);
}

console.log(toWords(99678665434));


module.exports = {
  isValid,
  formatter,
  kurs,
  toWords
}
