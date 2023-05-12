const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0)
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b)
};

const power = function(x, y) {
	return x**y
};

const factorial = function(x) {
  let y = []
  if (x == 0 || x == 1)
      return 1;
  if (y[x] > 0)
      return y[x];
  return y[x] = factorial(x-1) * x;
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
