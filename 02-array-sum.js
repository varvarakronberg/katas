/**
 * Write a function that calculates sum of all elements of an array
 */

function sum(arr) {
    // your code here
    var result = 0;
    for (var index = 0; index < arr.length; index++) {
        result += arr[index];
    }
    return result;
}

module.exports = sum;