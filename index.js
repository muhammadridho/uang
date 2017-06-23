
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



module.exports = {
  isValid,
  formatter
}
