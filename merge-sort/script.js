// Array Sorting in Acending Order
let arr = [32, 45, 672, 432, 53, 27, 8, 4563]
let original_arr = document.getElementById('original_arr')
let sorted_arr = document.getElementById('sorted_arr')

original_arr.innerHTML = "[ "

for (let i = 0; i < arr.length; i++) {
    original_arr.innerHTML += arr[i] + ", "
}

original_arr.innerHTML += " ]"

function merge_sort(arr) {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)

    let left = customSlice(arr, 0, mid)
    let right = customSlice(arr, mid, arr.length)

    return merge(merge_sort(left), merge_sort(right))
}

function merge(left, right) {
    let sortedArray = []

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            customPush(sortedArray, customShift(left))
        } else {
            customPush(sortedArray, customShift(right))
        }
    }
    return [...sortedArray, ...left, ...right]
}

function customSlice(arr, start, end) {
    let result = []
    for (let i = start; i < end; i++) {
        customPush(result, arr[i])
    }
    return result
}

function customShift(arr) {
    if (arr.length === 0) return undefined
    let firstElement = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr.length = arr.length - 1 // removeing last element

    return firstElement
}

function customPush(arr, element) {
    arr[arr.length] = element // adding element to the end
}

sorted_arr.innerHTML = "[ " + merge_sort(arr).join(", ") + " ]"


// Array Sorting in Descending Order
let arr1 = [32, 45, 672, 432, 53, 27, 8, 4563]
let des_original_arr = document.getElementById('des_original_arr')
let des_sorted_arr = document.getElementById('des_sorted_arr')

des_original_arr.innerHTML = "[ "

for (let i = 0; i < arr1.length; i++) {
    des_original_arr.innerHTML += arr1[i] + ", "
}

des_original_arr.innerHTML += " ]"

function des_merge_sort(arr1) {
    if (arr1.length <= 1) return arr1

    let mid1 = Math.floor(arr1.length / 2)

    let left1 = customSlice(arr1, 0, mid1)
    let right1 = customSlice(arr1, mid1, arr1.length)

    return merge(des_merge_sort(left1), des_merge_sort(right1))
}

function merge(left1, right1) {
    let sortedArray1 = []

    while (left1.length && right1.length) {
        if (left1[0] > right1[0]) {
            customPush(sortedArray1, customShift(left1))
        } else {
            customPush(sortedArray1, customShift(right1))
        }
    }
    return [...sortedArray1, ...left1, ...right1]
}

function customSlice(arr1, start1, end1) {
    let result1 = []
    for (let i = start1; i < end1; i++) {
        customPush(result1, arr1[i])
    }
    return result1
}

function customShift(arr1) {
    if (arr1.length === 0) return undefined
    let firstElement1 = arr1[0]
    for (let i = 1; i < arr1.length; i++) {
        arr1[i - 1] = arr1[i]
    }
    arr1.length = arr1.length - 1 // removeing last element

    return firstElement1
}

function customPush(arr1, element1) {
    arr1[arr1.length] = element1 // adding element to the end
}
des_sorted_arr.innerHTML = "[ " + des_merge_sort(arr1).join(", ") + " ]"