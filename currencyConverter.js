amount = 20 // amount being converted

function converter(amount) { //function taking
    rate = 155.33 // exchange rate 
    let change = amount * rate //multiplying exchange rate by amount converted
    return change.toFixed(2) // return of product
}

console.log(`USD to be converted is  $${amount}.`)
console.log(`Changing $${amount} USD into Jamaican dollars results in $${converter(amount)} JMD.`)