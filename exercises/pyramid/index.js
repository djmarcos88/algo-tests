// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0) {
    if (row === n) {
        return;
    }

    const maxCols = n + (n - 1);
    const currentSymbols = 1 + 2 * row;

    let spaces = '';
    for (i = 0; i < maxCols; i++) {
        spaces += ' ';
    }

    let symbols = '';
    for (i = 0; i < currentSymbols; i++) {
        symbols += '#';
    }

    const middle = maxCols / 2;
    let currentStart = middle - row;

    let arr = [...spaces];
    arr.splice(currentStart, currentSymbols, ...symbols);

    console.log(arr.join(''));
    row++;
    pyramid(n, row);
}

module.exports = pyramid;

pyramid(7);
