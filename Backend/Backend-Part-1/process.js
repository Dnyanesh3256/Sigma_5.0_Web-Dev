console.log(process);

let args = process.argv;

for(let i=2;i<args.length;i++){
    console.log("Hello", args[i]);
}