// performs an operation on all the items in an array and returns true
// when all the items in and array satisfies the condition given or else returns false.

const arr = [2, 4, 6, 8, 10];

const evenValues = arr.every((a) => a % 2 === 0);
console.log(evenValues);

const greaterthan5 = arr.every((a) => a > 5);
console.log(greaterthan5); //returns false