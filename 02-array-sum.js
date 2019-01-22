/**
 * Write a function that calculates sum of all elements of an array
 */

function sum(arr) {
    var result = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result += element;
    }
    return result;
}

module.exports = sum;