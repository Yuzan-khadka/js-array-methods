// Changes the array which is called upon and provides the modified result.

const a = [1, 2, 3, 4, 5];

a.fill(0);

console.log(a);

// it has 3 parameters (number to be displayed, first index, last index)

a.fill(6, 2, 4);

console.log(a);

// fill in array from numbers 1 to 10

function fillInNumbers(n) {
    return Array(n).fill(0).map((_, idx) => idx + 1);
}

console.log(fillInNumbers(10));

const arr = [];
arr.length = 10;

const updArr = arr.fill(0).map((_, idx) => idx + 1);
console.log(updArr);