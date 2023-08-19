const sumAll = function(num1,num2) {
let result =0;
let maxValue = Math.max(num1,num2);
let minValue = Math.min(num1,num2);

if (num1 ==='string'  || num2 ==='string' ) return 'ERROR'
if (num1 ==='object'  || num2 ==='object' ) return 'ERROR'
if (num1 <0  || num2 <0 ) return 'ERROR'

for (let i=minValue; i<=maxValue; i++){

  result +=i ;
}
return result;
};

// Do not edit below this line
module.exports = sumAll;
