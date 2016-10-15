// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sum_of_primes: function(num) {

if((typeof num != "number") || (num <= 0) || (num % 1 != 0)){return "Please input a valid number";}
else{
 var primeNos=[];
 var sum = 0;
for(var i= 2; i<=num; i++){ 
for (var d = 2; d < i; d++) {if (i % d == 0) { break;}}
if (d > Math.sqrt(i)) {primeNos.push(sum+=d);}
}
return sum;
}
 }
}