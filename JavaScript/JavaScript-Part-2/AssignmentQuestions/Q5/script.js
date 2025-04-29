let a = 7;
let b = 17;
let c = 18;

if(a > b){
    if(a > c){
        console.log(`${a} is largest`);
    }else{
        console.log(`${c} is largest`);
    }
}else{
    if(b > c){
        console.log(`${b} is largest`);
    }else{
        console.log(`${c} is largest`);
    }
}
