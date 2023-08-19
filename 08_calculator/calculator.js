const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
  return num1-num2
};

const sum = function(arr) {
  let result =0;
	if (arr.length===0) return 0;
  for (let i =0; i<arr.length; i++){
    result+=arr[i]

  }
};

const multiply = function() {
  if (arr.length===0) return 0;
  for (let i =0; i<arr.length; i++){
    result*=arr[i]

  }
};

const power = function(base, exp) {
	return Math.pow(base, exp)
};

const factorial = function(n) {
	if (n===1 || n===0) return 1;
  else return (n*factorial(n-1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
