const findTheOldest = function(people) {
    let alive = people.filter(n => n.yearOfDeath == null)
    if (alive.length != 0) {
        return alive[0]
    }
    else {
        return people.reduce((x, y) => x.yearOfDeath - x.yearOfBirth > 
        y.yearOfDeath - y.yearOfBirth ? x : y);
    }
};

// Do not edit below this line
module.exports = findTheOldest;
