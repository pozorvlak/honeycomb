var honeycomb = require('./honeycomb.js');
var assert = require('assert');

assert.ok(honeycomb.isNumber(5));
assert.ok(!honeycomb.isNumber("fred"));
