const fizzBuzz = require('../fizzbuzz')

describe('fizzBuzz', () => {
    it('returns a string 1 for number 1', () => {
        expect(fizzBuzz(1)).toBe('1');
    })
})
