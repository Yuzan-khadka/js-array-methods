//from can be used to convert string to an array.

const str = "1234567";

const res = Array.from(str, (x) => Number(x));

console.log(res);  

// Set cannot contain duplicate values and is itself iterable.

const arr = [1, 2, 3, 4, 2, 1, 5, 4, 4, 6, 7, 3];

const newArr = Array.from(new Set(arr));

console.log(newArr);