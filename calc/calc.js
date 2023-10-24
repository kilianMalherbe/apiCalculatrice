let sum = function (a,b) {
    return a + b;
}

let sub = function (a,b) {
    return (a - b).toString();
}

let mult = function (a,b) {
    return (a * b).toString();
}

let div = function (a,b) {
    return b != 0 ? Math.floor(a / b).toString() : 'Pas de divisions par zéro';
}

let mod = function (a,b) {
    return a % b;
}

module.exports = {
    sum: sum,
    sub: sub,
    div: div,
    mult: mult,
    mod: mod
}; // ou module.exports.sum = sum;