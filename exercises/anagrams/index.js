// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let mapA = getCharMap(stringA);
    let mapB = getCharMap(stringB);

    if (mapA.size > mapB.size) {
        return comparer(mapA, mapB);
    } else {
        return comparer(mapB, mapA);
    }
}

function sortSolution(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;

function comparer(mapLonger, mapShorter) {
    for (let i of mapLonger) {
        let found = mapShorter.get(i[0]);

        if (!found || found !== i[1]) {
            return false;
        }
    }

    return true;
}

function getCharMap(str) {
    let plain = str.replace(/[^\w]/g, '').toLowerCase();
    let map = new Map();

    for (let char of plain) {
        const val = map.get(char) || 0;

        map.set(char, val + 1);
    }

    return map;
}

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}
