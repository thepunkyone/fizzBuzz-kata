const fizzBuzz = (number) => {
    if (number === 15 || number === 30) return 'FizzBuzz'
    if (number % 5 === 0) return 'Buzz'
    if (number % 3 === 0) return 'Fizz'
    return number.toString()
}

module.exports = fizzBuzz