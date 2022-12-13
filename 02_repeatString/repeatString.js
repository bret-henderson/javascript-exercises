const repeatString = function(repeatedString, numTimes) {
    if (numTimes < 0)
        return 'ERROR'
    let result = ''
    for (let i = 0; i < numTimes; i++) {
        result += repeatedString.toString()
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
