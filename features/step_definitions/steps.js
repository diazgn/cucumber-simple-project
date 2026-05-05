import { Given, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import assert from 'node:assert/strict';

Given('I perform a basic addition', function () {
    this.result = 2 + 2;
});

Then('the result should be 4', function () {
    assert.strictEqual(this.result, 5, 'Expected result is 4');
});

Then('the result should be 4 with chai assertion', function () {
    expect(this.result).to.equal(5, 'The result with chai should be 4');
});

