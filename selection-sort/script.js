// Array Sorting in Acending Order
let arr = [3, 45, 7, 53, 5, 67]
let original_arr = document.getElementById('original_arr')
let sorted_arr = document.getElementById('sorted_arr')

original_arr.innerHTML = "[ "

for (let i = 0; i < arr.length; i++) {
    original_arr.innerHTML += arr[i] + ", "
}

original_arr.innerHTML += " ]"

function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
        let lower_val = arr[i]
        let index_last_val = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < lower_val) {
                lower_val = arr[j]
                index_last_val = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[index_last_val]
        arr[index_last_val] = temp
    }
    return arr
}
sorted_arr.innerHTML = "[ " + selectionSort(arr).join(", ") + " ]"

// Array Sorting in Descending Order
let arr1 = [3, 45, 7, 53, 5, 67]
let des_original_arr = document.getElementById('des_original_arr')
let des_sorted_arr = document.getElementById('des_sorted_arr')

des_original_arr.innerHTML = "[ "

for (let i = 0; i < arr1.length; i++) {
    des_original_arr.innerHTML += arr1[i] + ", "
}

des_original_arr.innerHTML += " ]"

function desSelectionSort(arr1) {
    for (i = 0; i < arr1.length; i++) {
        let lower_val = arr1[i]
        let index_last_val = i
        for (let j = i; j < arr1.length; j++) {
            if (arr1[j] > lower_val) {
                lower_val = arr1[j]
                index_last_val = j
            }
        }
        let temp = arr1[i]
        arr1[i] = arr1[index_last_val]
        arr1[index_last_val] = temp
    }
    return arr1
}
des_sorted_arr.innerHTML = "[ " + desSelectionSort(arr1).join(", ") + " ]"