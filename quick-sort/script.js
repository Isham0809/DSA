// Array Sorting in Acending Order
let arr = [32, 45, 672, 432, 53, 27, 8, 50]
let original_arr = document.getElementById('original_arr')
let sorted_arr = document.getElementById('sorted_arr')

original_arr.innerHTML = "[ "

for (let i = 0; i < arr.length; i++) {
    original_arr.innerHTML += arr[i] + ", "
}

original_arr.innerHTML += " ]"

function quick_sort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high)
        quick_sort(arr, low, pivotIndex - 1)
        quick_sort(arr, pivotIndex + 1, high)
    }
    return arr
}

function partition(arr, low, high) {
    let pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}
sorted_arr.innerHTML = "[ " + quick_sort(arr).join(", ") + " ]"

// Array Sorting in Descending Order
let arr1 = [32, 45, 672, 432, 53, 27, 8, 50]
let original_arrdes_original_arr = document.getElementById('des_original_arr')
let des_sorted_arr = document.getElementById('des_sorted_arr')

des_original_arr.innerHTML = "[ "

for (let i = 0; i < arr1.length; i++) {
    des_original_arr.innerHTML += arr1[i] + ", "
}

des_original_arr.innerHTML += " ]"

function des_quick_sort(arr1, low1 = 0, high1 = arr1.length - 1) {
    if (low1 < high1) {
        let pivotIndex1 = partition(arr1, low1, high1)
        quick_sort(arr1, low1, pivotIndex1 - 1)
        quick_sort(arr1, pivotIndex1 + 1, high1)
    }
    return arr1
}

function partition(arr1, low1, high1) {
    let pivot1 = arr1[high1]
    let i = low1 - 1

    for (let j = low1; j < high1; j++) {
        if (arr1[j] >= pivot1) {
            i++
            [arr1[i], arr1[j]] = [arr1[j], arr1[i]]
        }
    }
    [arr1[i + 1], arr1[high1]] = [arr1[high1], arr1[i + 1]]
    return i + 1
}
des_sorted_arr.innerHTML = "[ " + des_quick_sort(arr1).join(", ") + " ]"