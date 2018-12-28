const sum = require('../01-sum.js');
const assert = require('assert');

describe('01-sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        assert.equal(sum(1, 2), 3);
    });

    it('adds 5 + 10 to equal 15', () => {
        assert.equal(sum(5, 10), 15);
    });
});