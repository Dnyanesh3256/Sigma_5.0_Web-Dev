let num = 287152;
let copy = num;
let sum = 0;

while(copy > 0){
    digit = copy % 10;
    sum += digit;
    copy = Math.floor(copy / 10);
}

console.log(sum);