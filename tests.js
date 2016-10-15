'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that the sum of prime numbers are computed properly", function() {
  
  it("should return false for strings", function() {
    assert(
        lib.sum_of_primes("") == "Please input a valid number");
  });

  it("should return false for null values", function(){
     assert(
             lib.sum_of_primes() == "Please input a valid number"
      );
  });

    it("should not admit negative numbers", function(){

assert(
        lib.sum_of_primes(-3) == "Please input a valid number"
  );
    });
 
  it("should return an output of 10 when 5 is given as input", function(){

   assert(
           lib.sum_of_primes(5) == 10
          );
  });

  it("should not allow decimal values as input", function(){
     assert(
          lib.sum_of_primes(3.5) == "Please input a valid number"
         );
  });
   
it ("should char datatype as input", function(){

     assert(
         lib.sum_of_primes('u')== "Please input a valid number"
      );
   });

   it ("should not allow special character as input as string or char", function(){

     assert(
         lib.sum_of_primes("#") == "Please input a valid number"
      );
   });

   it("should return a valid output for inputs as sum operation", function(){
      assert(
            lib.sum_of_primes(3+2) == 10
        );
   });

it("should return a valid output for inputs as product operation", function(){
      assert(
            lib.sum_of_primes(3*2) == 10
        );
   });

   it ("should return an output of 17 when 9 is given as input", function(){

    assert(
           lib.sum_of_primes(9) == 17
      );
   });
});