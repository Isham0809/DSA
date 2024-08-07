let arr = [3,6,4,9,10]

function rotateElement(arr){
    if(arr.length === 0)
        return arr
    let lastElement=arr.pop()
    arr.unshift(lastElement)
    return arr
}
console.log(rotateElement(arr))