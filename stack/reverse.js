function reverserStr(str){
    let stack = []
    for(let char of str){
        stack.push(char)
    }

    let revStr = ''
    while(stack.length>0){
        revStr += stack.pop()
        // console.log(revStr)
    }
    return revStr
}
console.log(reverserStr('Isha'))