let arr = [2,3,4,5,6]

function sumOfElement(arr){
    let sum = 0 
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum
}
console.log(sumOfElement(arr));