// Quick Sort Array Sorting

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

    for (j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}
console.log(quick_sort([32,45,647,432,8,53,50]))