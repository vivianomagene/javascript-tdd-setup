// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sum_of_primes: function isPrime(num) {
  primeNos=[];
  var primeSum = 0;

 for(var i=2; i<=num; i++){ if(i == 2){primeNos.push(i);}if(i % 2 != 0)  {primeNos.push(i);  }
 } 
 for (var l= 4; l <= primeNos.length - 1; l++){
 for (var i= 0; i <= primeNos.length; i++)
 {if (primeNos[l] % primeNos[i] == 0){primeNos.splice(l,1);} }}  
 for (var i = 0; i < primeNos.length; i++){ primeSum += primeNos[i]}

 return primeSum;   
    
  }
}