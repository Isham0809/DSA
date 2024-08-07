let arr = [2, 110, 43, 1, 0]

function sLargest(arr) {
    let largest = arr[0]
    let s_largest = undefined

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            s_largest = largest
            largest = arr[i]
        } else if (arr[i] > s_largest && arr[i] !== largest) {
            s_largest = arr[i]
        }
    }
    return s_largest
}

console.log(sLargest(arr))
