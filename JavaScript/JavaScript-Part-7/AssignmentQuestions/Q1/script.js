let arrayAverage = (arr) => {
    let total = 0;

    for(let num of arr){
        total += num;
    }

    let avg = total / arr.length;

    return avg;
}

let arr = [5, 8, 4];
console.log(arrayAverage(arr));