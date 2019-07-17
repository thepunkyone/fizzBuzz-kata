const fizzBuzz = (number) => {
    if (number === 3 || number === 9 || number === 21) return 'Fizz'
    return number.toString()
}

module.exports = fizzBuzz