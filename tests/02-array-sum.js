const sum = require('../02-array-sum.js');
const assert = require('assert');

describe('02-array-sum', () => {
    it('sum of [1, 2, 3] is 6', () => {
        assert.equal(sum([1, 2, 3]), 6);
    });

    it('sum of [1] is 1', () => {
        assert.equal(sum([1]), 1);
    });

    it('sum of [-1, 0, 1] is 0', () => {
        assert.equal(sum([-1, 0, 1]), 0);
    });

    it('sum of [345, -293, 89.32] is 141.32', () => {
        assert.equal(sum([345, -293, 89.32]), 141.32);
    });
});