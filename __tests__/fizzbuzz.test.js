const fizzBuzz = require('../fizzbuzz')

describe('fizzBuzz', () => {

    it('returns a string value of the number parameter', () => {
        expect(fizzBuzz(1)).toBe('1')
        expect(fizzBuzz(2)).toBe('2')
        expect(fizzBuzz(4)).toBe('4')
    })
})
