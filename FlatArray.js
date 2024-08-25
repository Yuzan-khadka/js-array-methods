//  creates a single array from a nested array.
// in other word, flattens the nested array.

const nestedArr = [1, 2, 3, [4, 5, 6], [7, [8]], 9];

const flatArr = nestedArr.flat();

console.log(flatArr); 

// has a parameter which is a level of the nested array.
const deepFlatArr = nestedArr.flat(2); //can be passed Infinity for flattening without the need to specify the nested level
 
console.log(deepFlatArr);  

