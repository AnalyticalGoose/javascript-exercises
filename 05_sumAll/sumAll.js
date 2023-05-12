const sumAll = function(x, y) {
    if (x < 0 || y < 0 || !Number.isInteger(x && y)) {
        return 'ERROR'
    }
    else {
        x > y ? [x, y] = [y, x] : false
        return y*(x + y)/2
    }
};

// Do not edit below this line
module.exports = sumAll;
