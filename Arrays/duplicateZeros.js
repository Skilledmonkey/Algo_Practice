const test1 = [1,0,2,3,0,4,5,0]
const test2 = [1,2,3]
const test3 = []


var duplicateZeros = function(arr) {
    let length = arr.length
    if (!arr.includes(0)) {
        return null
    }

    for (let i = 0; i < length; i++) {
        let currentElement = arr[i]
        if (currentElement === 0) {
            arr.splice(i, 0, 0)
            i++
            arr.pop()
        }
    }
    return arr
};

console.log(duplicateZeros(test1))
console.log(duplicateZeros(test2))
console.log(duplicateZeros(test3))