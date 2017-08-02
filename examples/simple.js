const ntc = require('../src/index');

// example taken from http://chir.ag/projects/ntc/

const n_match = ntc.name('#6195ED');
n_rgb = n_match[0]; // RGB value of closest match
n_name = n_match[1]; // Text string: Color name
n_exactmatch = n_match[2]; // True if exact color match

console.log(n_match); // [ '#6495ED', 'Cornflower Blue', false ]
