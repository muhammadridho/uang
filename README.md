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

## Tests
  `npm test`

## Contributing
If you are interested to contribute, you can fork, pull request and even give issue.
The upcoming feature is converting rupiah currency into various currencies
