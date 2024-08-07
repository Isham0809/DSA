let arr =[1,2,2,4,4,5,6,7,7]

function duplicateArray(arr){
    // let result = []
    let j = 1
    if (arr.length<=1) 
        return arr
    for(i=1;i<arr.length;i++){
        if (arr[i]!==arr[i-1]) {
            arr[j]=arr[i]
            j++;
        }
    }
    arr.length = j;
    return arr
}
console.log(duplicateArray(arr))