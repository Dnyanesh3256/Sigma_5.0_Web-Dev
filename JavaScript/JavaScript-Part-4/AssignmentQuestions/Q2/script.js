let num = 287152;
let copy = num;
let count = 0;

while(copy > 0){
    count++;
    copy = Math.floor(copy / 10);
}

console.log(count);