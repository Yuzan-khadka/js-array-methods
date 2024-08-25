// It alters the array called upon. Used for removing and adding new items form and to array starting from specific index 
/* Has 3 parameters 1st for specifying the start index,
 2nd is for the total number of items to be removed,
and 3rd for adding the new items.
 
*/

const numbers = [1, 2, 3, 4, 5, 6];

const deletedNum = numbers.splice(2, 3, 7, 8);

console.log(numbers);

console.log(deletedNum);
