let num = prompt("Enter number to ckeck it's factorial");

let fact = 1;

if(num == 0){
    console.log(`factorial of ${num} is ${fact}`);
}

for(let i=1;i<=num;i++){
    fact *= i;
}

console.log(`factorial of ${num} is ${fact}`);