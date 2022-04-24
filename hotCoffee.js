fetch('https://api.sampleapis.com/coffee/hot')
.then(function cofjson(cof) {
    return cof.json
})
.then(function cofeeTranslate(trans) {
    console.log(trans)
})
.catch(function )