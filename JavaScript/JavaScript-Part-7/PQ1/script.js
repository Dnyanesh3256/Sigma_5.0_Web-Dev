console.log("Arrow function that returns the square of a number : 5");

let square = (n) => {
    return n*n;
}

console.log(square(5));


console.log("Arrow function that prints 'Hello World' 5 times at intervals of 2s each : ");

let id  = setInterval( () => {
    console.log("Hello World!");
}, 2000 );

setTimeout( () => {
    clearInterval(id)
}, 10000 );


