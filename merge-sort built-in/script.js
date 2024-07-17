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
  if (arr.length <=1  )
    return arr
  const mid = Math.floor(arr.length / 2)
  const left = merge_sort(arr.slice(0, mid))
  const right = merge_sort(arr.slice(mid))

  return merge_side(left,right)
}
function merge_side(left,right){
  let sortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift())
    } else {
      sortedArray.push(right.shift())
    }
  }

  return [...sortedArray, ...left, ...right]
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
  if (arr1.length <=1  )
    return arr1
  const mid1 = Math.floor(arr1.length / 2)
  const left1 = des_merge_sort(arr1.slice(0, mid1))
  const right1 = des_merge_sort(arr1.slice(mid1))

  return des_merge_side(left1,right1)
}
function des_merge_side(left1,right1){
  let sortedArray1 = [];

  while (left1.length && right1.length) {
    if (left1[0] > right1[0]) {
      sortedArray1.push(left1.shift())
    } else {
      sortedArray1.push(right1.shift())
    }
  }

  return [...sortedArray1, ...left1, ...right1]
}
des_sorted_arr.innerHTML = "[ " + des_merge_sort(arr1).join(", ") + " ]"