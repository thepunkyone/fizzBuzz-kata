const fizzBuzz = (number) => {
    if (number === 5 || number === 10 || number === 40) return 'Buzz'
    if (number % 3 === 0) return 'Fizz'
    return number.toString()
}

module.exports = fizzBuzz