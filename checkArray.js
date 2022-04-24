let names = ['Todd', 'Darie', 'Johnathan', 'Zach', 'Manny']
let check = 'Ahmed'

function checkArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let keeptrack = ''
        keeptrack = arr[i]
        if (arr[i] !== check) {
            return true
        } else {
            return false
        }
    }
}
console.log(checkArray(names))