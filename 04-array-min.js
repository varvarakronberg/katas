/**
 * Write a function that returns the smallest number in the array
 */

function min(array) {
    //your code
    var minimum = Infinity;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element < minimum) {
            minimum = element;
        }
    }
    return minimum;
}
module.exports = min;