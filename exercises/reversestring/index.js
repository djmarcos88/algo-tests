// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let arr = Array.from(str);
    let reversed = '';

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed += arr[i];
    }

    return reversed;
}

function reverse2(str) {
    let arr = Array.from(str);

    return arr.reverse().join('');
}

function reverse3(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

function reverse4(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

module.exports = reverse4;
