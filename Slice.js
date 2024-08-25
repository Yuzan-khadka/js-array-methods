// returns a shallow copy of an array. It has two parameters start index and end index.

// Use case to display first x items.

const numbers = [1, 2, 3, 4, 5, 6];

const sliceNum = numbers.slice(); // returns same array
console.log(sliceNum);

const sliceNum2 = numbers.slice(2,5); // returns array from index 2 till 4 last index is excluded
console.log(sliceNum2);

const sliceNegative = numbers.slice(-2); // negative index starts form the last item
console.log(sliceNegative); 
 