# uang
A library help

## Installation
  `npm install uang`

## Usage
  ##### require first
  you can import or require
```javascript
 //ES 5
var uang = require 'redcarpet'
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
 uang.formatter('xx0') //false
 uang.formatter('0.0') //false
  uang.formatter('100') //true
```

## Tests
  `npm test`

## Contributing
If you are interested to contribute, you can fork, pull request and even give issue.
The upcoming feature is converting rupiah currency into various currencies
