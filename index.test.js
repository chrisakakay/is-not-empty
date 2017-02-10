'use strict';

const isNotEmpty = require('./index');

describe('isNotEmpty', function() {
    it('isObject()', () => {
        expect(isNotEmpty.object()).toBe(false);
        expect(isNotEmpty.object(undefined)).toBe(false);
        expect(isNotEmpty.object([])).toBe(false);
        expect(isNotEmpty.object({})).toBe(false);
        expect(isNotEmpty.object('')).toBe(false);
        expect(isNotEmpty.object('a')).toBe(false);
        expect(isNotEmpty.object(null)).toBe(false);

        expect(isNotEmpty.object({ a: 1 })).toBe(true);
    });

    it('isArray()', () => {
        expect(isNotEmpty.array()).toBe(false);
        expect(isNotEmpty.array(undefined)).toBe(false);
        expect(isNotEmpty.array([])).toBe(false);
        expect(isNotEmpty.array({})).toBe(false);
        expect(isNotEmpty.array('')).toBe(false);
        expect(isNotEmpty.array('a')).toBe(false);
        expect(isNotEmpty.array(null)).toBe(false);

        expect(isNotEmpty.array(['a'])).toBe(true);
    });
});
