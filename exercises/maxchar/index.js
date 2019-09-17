// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let result = '';
    let counter = new Map();

    for (let char of str) {
        const val = counter.get(char) || 0;

        counter.set(char, val + 1);
    }

    let max = 0;

    counter.forEach((val, key) => {
        if (val > max) {
            max = val;
            result = key;
        }
    });

    return result;
}

function maxChar2(str) {
    let result = '';
    let counter = new Map();
    let max = 0;

    for (let char of str) {
        const val = counter.get(char) + 1 || 0;

        counter.set(char, val);

        if (val > max) {
            max = val;
            result = char;
        }
    }

    return result !== '' ? result : str[0];
}

module.exports = maxChar2;
