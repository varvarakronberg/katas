/**
 * Write a function that returns the smallest number in the array
 */

function min(array) {
    var minimum = Infinity;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < minimum) {
            minimum = element;
        }
    }
    return minimum;
}
module.exports = min;