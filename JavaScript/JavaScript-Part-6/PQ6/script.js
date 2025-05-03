function addStrings(arr){
    finStr = "";
    for(let i=0;i<arr.length;i++){
        finStr += arr[i];
    }

    return finStr;
}

let arr = ["hi", "hello", "bye", "!"];
console.log(addStrings(arr));