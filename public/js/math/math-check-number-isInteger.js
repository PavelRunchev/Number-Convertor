function checkIsNumber(n) {
    return typeof Number(n) == 'number' && !isNaN(Number(n));
}

function checkIsInteger(n) {
    return typeof Number(n) == 'number' && !isNaN(Number(n)) && Number(n) % 1 === 0;
}

function checkIsFloat(n) {
    return typeof Number(n) == 'number' && !isNaN(Number(n)) && Number(n) % 1 !== 0;
}