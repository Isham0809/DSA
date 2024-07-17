// Array Sorting in Acending Order
let arr = [3, 45, 67, 43, 5, 7]
let original_arr = document.getElementById('original_arr')
let sorted_arr = document.getElementById('sorted_arr')

original_arr.innerHTML = "[ "

for (let i = 0; i < arr.length; i++) {
    original_arr.innerHTML += arr[i] + ", "
}

original_arr.innerHTML += " ]"

function bubbleSort(arr) {
    let swap
    do {
        swap = false
        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swap = true
            }
        }
    } while (swap)
    return arr
}
sorted_arr.innerHTML = "[ " + bubbleSort(arr).join(", ") + " ]"

// Array Sorting in Decending Order
let arr1 = [3, 45, 67, 43, 5, 7]
let des_original_arr = document.getElementById('des_original_arr')
let des_sorted_arr = document.getElementById('des_sorted_arr')

des_original_arr.innerHTML = "[ "

for (let i = 0; i < arr1.length; i++) {
    des_original_arr.innerHTML += arr1[i] + ", "
}

des_original_arr.innerHTML += " ]"

function desBubbleSort(arr1) {
    let swap1
    do {
        swap1 = false
        for (let i = 0; i <= arr1.length - 1; i++) {
            if (arr1[i] < arr1[i + 1]) {
                let temp = arr1[i]
                arr1[i] = arr1[i + 1]
                arr1[i + 1] = temp
                swap1 = true
            }
        }
    } while (swap1)
    return arr1
}
des_sorted_arr.innerHTML = "[ " + desBubbleSort(arr1).join(", ") + " ]"