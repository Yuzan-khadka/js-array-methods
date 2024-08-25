// performs an operation on all the items in an array and returns true
// even if atleast one item in the array satisfies the condition given or else returns false.

const numbers = [1, 3, 4, 5, 6];

const greaterThan5 = (num) => {
    return num > 5;
 }
  
const res = numbers.some(greaterThan5);



console.log(res);