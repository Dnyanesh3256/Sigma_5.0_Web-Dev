let country = ["Australia", "Germany", "United States of America"];

function longestName(arr){
    let ansIdx = 0;
    for(let i=0;i<arr.length;i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;

        if(currLen > ansLen){
            ansIdx = i;
        }
    }

    return arr[ansIdx];
}

console.log(longestName(country));