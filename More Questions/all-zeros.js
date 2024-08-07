let arr = [1, 0, 7, 0, 0, 3, 5, 0]

function moveZero(arr) {
    let result = 0
    for (i = 0; i < arr.length; i++) {
        if(arr[i] !== 0){
            [arr[i],arr[result]] = [arr[result],arr[i]]
            result++
        }
    }
    return arr
}
console.log(moveZero(arr))