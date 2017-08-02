# Name That Color

A Node CommonJS compatible wrapper for the Name That Color library (ntc js) - http://chir.ag/projects/ntc/

## Installation

```
npm install ntcjs --save
```

## Getting Started

```javascript
const ntc = require('ntcjs');

const n_match = ntc.name('#6195ED');
n_rgb = n_match[0]; // RGB value of closest match
n_name = n_match[1]; // Text string: Color name
n_exactmatch = n_match[2]; // True if exact color match

console.log(n_match); // [ '#6495ED', 'Cornflower Blue', false ]
```

## Live Demo

This is a live demo of the original ntcjs library

http://chir.ag/projects/name-that-color/#6195ED

## Running the Tests

Make sure you install the necessary dev dependencies needed to run the tests:

```
npm install
```

Then run the tests

```
npm test
```

## Disclaimer

All credit goes to [Chirag Mehta](http://chir.ag/about) for creating the original ntc.js library.
