const removeFromArray = function(inputArray, ...theArgs) {
    let result = inputArray
    //let index = inputArray.indexOf(argToBeRemoved)

    for (let i = 0; i < theArgs.length; i++) {
        let index = inputArray.indexOf(theArgs[i])
        if (index >= 0)
            result.splice(index, 1)
    }

    return result
};

// Do not edit below this line
module.exports = removeFromArray;
