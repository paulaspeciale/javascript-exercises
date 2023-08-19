const convertToCelsius = function(val) {
  return Math.round((val - 32) / 1.8);
};

const convertToFahrenheit = function(val) {
  return Math.round((val * 1.8) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
