/**
 * Write a function that returns the smallest number in the array
 */

function min(array) {
    //your code
    return array.reduce((min, p) => p < min
        ? p
        : min, array[0]);
}
module.exports = min;