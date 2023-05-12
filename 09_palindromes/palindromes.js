const palindromes = function (input) {
    const str = input.replace(/\W/g, '').toLowerCase()
    return str.split("").reverse().join("") == str
};

// Do not edit below this line
module.exports = palindromes;
