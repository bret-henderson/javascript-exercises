const leapYears = function(inputYear) {
    return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);

    // if (inputYear % 400 == 0)
    //     return true
    // else if (inputYear % 100 == 0 && inputYear % 400 != 0)
    //     return false
    // else if (inputYear % 4 == 0)
    //     return true
    // else
    //     return false
};

// Do not edit below this line
module.exports = leapYears;
