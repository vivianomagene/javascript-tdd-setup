'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that the sum of prime numbers are computed properly", function() {
  it("should return false for strings", function() {
    assert(
        lib.sum_of_primes("") == false
    );
  });

  it("should return false for null values", function(){
     assert(
             lib.sum_of_primes() == false
      );
  });

    it("should not admit negative numbers", function(){

assert(
        lib.sum_of_primes(-n) == false
  );
    });
});