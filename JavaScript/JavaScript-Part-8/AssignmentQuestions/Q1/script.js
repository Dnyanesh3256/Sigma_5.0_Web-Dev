let arr = [1, 2, 3, 4, 5];

let square = arr.map((ele) => {
    return ele * ele;
});

console.log(square);

let sum = square.reduce((sum, curr) => sum + curr, 0);

let avg = sum / square.length;

console.log(avg);