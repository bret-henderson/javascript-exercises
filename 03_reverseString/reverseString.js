const reverseString = function(inputString) {
    let result = ''
    let length = inputString.length
    for (let i = length - 1; i >= 0; i--) {
        result += inputString.charAt(i)
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
