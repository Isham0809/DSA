/*
Array Indexing
Array traversal.
*/

let array = [1,2,3,4,5,6,7,8,9,10]
let array1 = document.getElementById('array1') 
// showing all elements of array
for(var i=0; i<array.length;i++)
{
    array1.innerHTML += `<br> Array ${i} is ${array[i]} <br>` 
}

// // single element
// console.log(array[4])

// // function to show perticular value of element
// function getElement(){
//     let element = document.getElementById('element').value
//     let value = parseInt(element)

//     if(value >= 0 && value < array.length){
//         alert(`Array at ${value} is ${array[value]}`)
//     }else{
//         alert("Invalid Input")
//     }
// }

// function for inserting element value in element
function getElement(){
    let element = document.getElementById("element").value
    // let array1 = document.getElementById('array1') 
    let newValue = 20

    for(var i=array.length-1 ; i>=0; i--){
        if(i>=element){
            array[i+1] = array[i]
        }
        if(element == i){
            array[i] = newValue
        }
        array1.innerHTML += `<br> Array ${i} is ${array[i]} <br>` 
    }
    // console.warn(array)
}