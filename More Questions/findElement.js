let arr = [1, 2, 3, 4, 5]
let element = 4

function findElement(arr, element) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}
console.log("Element : "+element)
console.log("Index: " + findElement(arr, element))