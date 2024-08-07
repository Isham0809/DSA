let arr = [1, 2, 3, 4]
let arr1 = [3, 2, 4, 5]

function sameValue(arr, arr1) {
    let result = []
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr1.length; j++) {
            if (arr[i] == arr1[j])
                result.push(arr[i])
        }
    }
    return result
}

console.log(sameValue(arr, arr1))