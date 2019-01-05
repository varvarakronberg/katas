/**
 * Write a function that calculates sum of all elements of an array
 */

function sum(arr) {
    // your code here
    var result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

module.exports = sum;