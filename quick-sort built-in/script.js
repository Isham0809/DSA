// Array Sorting in Acending Order
let arr = [32, 45, 672, 432, 53, 27, 8, 50]
let original_arr = document.getElementById('original_arr')
let sorted_arr = document.getElementById('sorted_arr')

original_arr.innerHTML = "[ "

for (let i = 0; i < arr.length; i++) {
    original_arr.innerHTML += arr[i] + ", "
}

original_arr.innerHTML += " ]"

let quicksort = (arr) => {
    if (arr.length <= 1) 
        return arr
  
    let pivot = arr[0]
    let leftArray = []
    let rightArray = []
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArray.push(arr[i])
      } else {
        rightArray.push(arr[i])
      }
    }
    return [...quicksort(leftArray), pivot, ...quicksort(rightArray)]
  };

sorted_arr.innerHTML = "[ " + quicksort(arr).join(", ") + " ]"

// Array Sorting in Descending Order
let arr1 = [32, 45, 672, 432, 53, 27, 8, 50]
let des_original_arr = document.getElementById('des_original_arr')
let des_sorted_arr = document.getElementById('des_sorted_arr')

des_original_arr.innerHTML = "[ "

for (let i = 0; i < arr1.length; i++) {
  des_original_arr.innerHTML += arr1[i] + ", "
}

des_original_arr.innerHTML += " ]"

let des_quicksort = (arr1) => {
    if (arr1.length <= 1) 
        return arr1
  
    let pivot1 = arr1[0]
    let leftArray1 = []
    let rightArray1 = []
  
    for (let i = 1; i < arr1.length; i++) {
      if (arr1[i] > pivot1) {
        leftArray1.push(arr1[i])
      } else {
        rightArray1.push(arr1[i])
      }
    }
    return [...des_quicksort(leftArray1), pivot1, ...des_quicksort(rightArray1)]
  };

  des_sorted_arr.innerHTML = "[ " + des_quicksort(arr1).join(", ") + " ]"