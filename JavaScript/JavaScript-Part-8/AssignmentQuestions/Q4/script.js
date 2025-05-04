let doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((ele) => ele * 2),
];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));