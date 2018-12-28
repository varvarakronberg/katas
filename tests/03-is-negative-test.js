const isNegative = require('../03-is-negative.js');
const assert = require('assert');

describe('03-is-negative', () => {
    it('-1 is negative', () => {
        assert.equal(isNegative(-1), true);
    });

    it('0 is positive', () => {
        assert.equal(isNegative(0), false);
    });

    it('1 is positive', () => {
        assert.equal(isNegative(0), false);
    });
});