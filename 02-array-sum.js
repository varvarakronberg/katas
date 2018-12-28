/**
 * Write a function that calculates sum of all elements of an array
 */

function sum(arr) {
    // your code here
    return arr.reduce((i, j) => i + j);
}

module.exports = sum;