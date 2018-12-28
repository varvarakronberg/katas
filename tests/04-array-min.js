const min = require('../04-array-min.js');
const assert = require('assert');

describe('04-array-min', () => {
    it('min of [1260, 490, 599, 1400, 820] is 490', () => {
        assert.equal(min([1260, 490, 599, 1400, 820]), 490);
    });

    it('min of [-1, 3, 0, -4, 1, 4, -2] is 1', () => {
        assert.equal(min([
            -1,
            3,
            0,
            -4,
            1,
            4,
            -2
        ]), -4);
    });

    it('min of [232] is 232', () => {
        assert.equal(min([232]), 232);
    });

    it('min of [45, 10, -20, 0, 3, -20] is -20', () => {
        assert.equal(min([
            45,
            10,
            -20,
            0,
            3,
            -20
        ]), -20);
    });
});