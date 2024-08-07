let arr = [3, 5, 4]
let arr1 = [4, 5, 3]

function anagramArray(arr, arr1) {
    if (arr.length !== arr1.length) {
        return false
    }

    const array = arr.slice().sort((a, b) => a - b)
    const array1 = arr1.slice().sort((a, b) => a - b)

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array1[i]) {
            return false
        }
    }
    return true
}
console.log(anagramArray(arr, arr1))