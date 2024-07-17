let data = [1, 2, 3, 4, 5]
let data1 = [6, 7, 8, 9, 10]
let data2 = []

let output = document.getElementById('output')
let output1 = document.getElementById('output1')
let output2 = document.getElementById('output2')
let output3 = document.getElementById('output3')
let output4 = document.getElementById('output4')

// Displaying all Array 
function displayArray(element, array) {
    element.innerHTML = ''

    for (var i = 0; i < array.length; i++) {
        element.innerHTML += `<br> Array ${i} is ${array[i]} <br>`
    }
}

displayArray(output, data)
displayArray(output1, data)
displayArray(output2, data2)
displayArray(output3, data)
displayArray(output4, data)

// Inserting Data in Array
function getElement() {
    let input1 = parseInt(document.getElementById('input1').value)
    let input2 = parseInt(document.getElementById('input2').value)

    if (data.includes(input2)) {
        alert("Value already exists in the array!")
        return
    }

    for (let i = data.length - 1; i >= input1; i--) {
        data[i + 1] = data[i]
    }
    data[input1] = input2

    displayArray(output, data)
}

// Deleteing single data from Array
function deleteElement() {
    let input3 = parseInt(document.getElementById('input3').value)

    if (input3 < 0 || input3 >= data.length) {
        alert("Invalid index!")
        return
    }

    for (let i = input3; i < data.length - 1; i++) {
        data[i] = data[i + 1]
    }
    data.length = data.length - 1

    displayArray(output1, data)
    console.log(data)
}


// Concating two Array into third Array
for (let i = 0; i < data.length; i++) {
    data2[i] = data[i]
}
for (let i = 0; i < data1.length; i++) {
    data2[data.length + i] = data1[i]
}
displayArray(output2, data2)


// Linear Searching
function searchElement(){
    let input4 = parseInt(document.getElementById('input4').value)
    var index = undefined
    
    for (var i = 0; i < data.length; i++) {
        if (input4 === data[i]) {
            index = i
            break;
        }
    }
    document.getElementById('output3').innerText = index !== undefined ? 'Index: ' + index : 'Element not found';
}

// Updating Data in Array
function updateElement() {
    let input5 = parseInt(document.getElementById('input5').value)
    let input6 = parseInt(document.getElementById('input6').value)

    if (data.includes(input6)) {
        alert("Value already exists in the array!")
        return
    }

    for (let i = 0; i <= data.length; i++) {
        if(i==input5){
            data[i] = input6
        }
    }
    displayArray(output4, data)
}