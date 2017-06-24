# uang
This library serves to process data related to the money Indonesia, diantarnya formatting, the mention to the sentence, to the exchange rate currency

## Installation
  `npm install uang`

## Usage
  ##### require first
  you can import or require
```javascript
 //ES 5
var uang = require 'uang'
//ES 6
import uang from 'uang'
```
Some function can you call, after you has been import library
##### Formatter Number
 ```javascript
 uang.formatter(1000) //Rp 1.000
 uang.formatter('5000') //Rp 5.000
```
##### Validation
 ```javascript
 uang.isValid('xx0') //false
 uang.isValid('0.0') //false
  uang.isValid('100') //true
```

##### ToWords
 ```javascript
 uang.toWords(10000)) //'Sepuluh Ribu rupiah'
 uang.toWords(30000000))//'Tiga Puluh Juta rupiah'
 uang.toWords(3566775431)) //'Tiga Miliar Lima Ratus Enam Puluh Enam Juta Tujuh Ratus Tujuh Puluh Lima Ribu Empat Ratus Tiga Puluh Satu rupiah'
```

#### exchange
``` javascript
    kurs()
    /* example
    { AUD: 'Rp. 10.069',
  BGN: 'Rp. 7.601',
  BRL: 'Rp. 3.986',
  CAD: 'Rp. 10.056',
  CHF: 'Rp. 13.700',
  CNY: 'Rp. 1.945',
  CZK: 'Rp. 565',
  DKK: 'Rp. 1.999',
  GBP: 'Rp. 16.931',
  HKD: 'Rp. 1.706',
  HRK: 'Rp. 2.008',
  HUF: 'Rp. 48',
  ILS: 'Rp. 3.757',
  INR: 'Rp. 206',
  JPY: 'Rp. 120',
  KRW: 'Rp. 12',
  MXN: 'Rp. 737',
  MYR: 'Rp. 3.103',
  NOK: 'Rp. 1.571',
  NZD: 'Rp. 9.688',
  PHP: 'Rp. 265',
  PLN: 'Rp. 3.513',
  RON: 'Rp. 3.252',
  RUB: 'Rp. 223',
  SEK: 'Rp. 1.522',
  SGD: 'Rp. 9.593',
  THB: 'Rp. 392',
  TRY: 'Rp. 3.789',
  USD: 'Rp. 13.305',
  ZAR: 'Rp. 1.029',
  EUR: 'Rp. 14.866' }
  */
```

## Tests
Will running
  `npm test`

## Contributing
If you are interested to contribute, you can fork, pull request and even give issue.
The upcoming feature is converting rupiah currency into various currencies
