let input = 25

function tempConverter2 (input) {
    {
        console.log(`${input}°C is ${input}° in celcius`)
    }
    {
        let farenheit = ((input *9/5 ) + (32))
        console.log(`${input}°C retuns ${farenheit}°F.`)
    }
    {
        let kelvin = 273 - input
        console.log(`${input}°C returns ${kelvin} Kelvin.`)
    }
}
tempConverter2(input)