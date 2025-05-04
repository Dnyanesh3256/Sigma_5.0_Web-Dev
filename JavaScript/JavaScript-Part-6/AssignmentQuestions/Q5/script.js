let start = 10;
let end = 20;

function generateNum(start, end){
    let diff = end - start;
    let num = Math.floor(Math.random() * diff) + start;
    return num;
}

console.log(generateNum(start, end));