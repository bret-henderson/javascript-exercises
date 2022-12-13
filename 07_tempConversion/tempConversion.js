const convertToCelsius = function(celciusInput) {
  let result = +((celciusInput - 32) * (5/9)).toFixed(1)
  // Math.round((celciusInput - 32) * (5/9) * 10) / 10        This also works
  return result
};

const convertToFahrenheit = function(fahrenheitInput) {
  let result = +((fahrenheitInput * (9/5)) + 32).toFixed(1)
  return result
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
