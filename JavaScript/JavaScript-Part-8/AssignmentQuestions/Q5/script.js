let mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));