// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let chunks = [];

    while (array.length > 0) {
        chunks.push(array.splice(0, size));
    }

    return chunks;
}

function immutableChunk(array, size) {
    let chunks = [];
    let mutable = [...array];

    while (mutable.length > 0) {
        chunks.push(mutable.splice(0, size));
    }

    return chunks;
}

module.exports = immutableChunk;
