// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let arr = Array.from(n.toString());
    let negative = false;
    let reversed = '';

    for (let char of arr) {
        if (char === '-') {
            negative = true;
        } else {
            reversed = `${char}${reversed}`;
        }
    }

    if (negative) {
        reversed = `-${reversed}`;
    }

    return new Number(reversed);
}

module.exports = reverseInt;
