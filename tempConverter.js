let input = 66

function convertTemp (input) {
    return (input - 32) * (5/9)
}
console.log('')
console.log('This converter takes the temperature in °F and returns it in °C.')
console.log(`Temperature being converted is ${input}°F.`)
console.log(`Converted temperature is ${convertTemp(input).toFixed(0)}°C.`)