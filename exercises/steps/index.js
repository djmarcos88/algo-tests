// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    recursiveStep(1, n);
}

function recursiveStep(row, max) {
    if (row > max) {
        return;
    }
    let str = '';

    for (let i = 1; i <= max; i++) {
        if (i <= row) {
            str += '#';
        } else {
            str += ' ';
        }
    }

    console.log(str);

    row++;
    recursiveStep(row, max);
}

module.exports = steps;
