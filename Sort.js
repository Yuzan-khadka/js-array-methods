// Sort method is used to arrange the items in the array.
// Sort method changes the array which is called upon.
const names = ["Sanjay", "Augero", "Yuzan", "Messi", "Ronaldo"];

names.sort()
console.log(names);

/* Works perfect for Strings but for numbers it doesn't arrange the way it should
 because it treats each number as a String
For that a compare function must be introduced.
*/

const numbers = [12, 3, 34, 43, 55, 6, 2, 22];

numbers.sort((a, b) => a - b);

console.log(numbers);