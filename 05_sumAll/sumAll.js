const sumAll = function(intOne, intTwo) {
    let result = 0
    if (intOne < 0 || intTwo < 0)
        return 'ERROR'
    if (typeof intOne != 'number' || typeof intTwo != 'number')
        return 'ERROR'

    if (intOne > intTwo) {
        for (let i = intTwo; i <= intOne; i++) {
            result += i
        }
    }
    if (intTwo > intOne) {
        for (let i = intOne; i <= intTwo; i++) {
            result += i
        }
    }
    return result
};

// Do not edit below this line
module.exports = sumAll;
