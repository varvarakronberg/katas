/**
 * Write a function that returns the smallest number in the array
 */

function min(array) {
    //your code
    var minimum = Infinity;
    for (var i = 0; i < array.length; i++) {
        if (array[i] < minimum) {
            minimum = array[i];
        }
    }
    return minimum;
}
module.exports = min;