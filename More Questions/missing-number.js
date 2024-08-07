let arr = [5,7,8,9,10]

function findMissingNumber(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    let totalSum = ((max * (max + 1)) / 2) - ((min * (min - 1)) / 2)
    
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i]
    }

    return totalSum - actualSum;
}

console.log(findMissingNumber(arr));