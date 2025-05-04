console.log("Create a function to find the min number in an array : ");

let arr = [4, 5, 3, 1, 2];

let ans = arr.reduce((min, ele) => {
    if(min < ele){
        return min;
    }else{
        return ele;
    }
});

console.log(ans);
