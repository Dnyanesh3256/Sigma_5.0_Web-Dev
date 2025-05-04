console.log("Check if all numbers in array are multiples of 10 or not : ");

let arr = [20, 30, 40, 50];

let ans = arr.every( (el) => {
    return ((el % 10) == 0); 
});

console.log(ans);