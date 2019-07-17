const fizzBuzz = require('../fizzbuzz')

describe('fizzBuzz', () => {

    it('returns a string value of the number supplied', () => {
        expect(fizzBuzz(1)).toBe('1')
        expect(fizzBuzz(2)).toBe('2')
        expect(fizzBuzz(4)).toBe('4')
    })

    it('returns a string Fizz for all numbers which can be divided by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
        expect(fizzBuzz(9)).toBe('Fizz')
        expect(fizzBuzz(21)).toBe('Fizz')
    })
})
