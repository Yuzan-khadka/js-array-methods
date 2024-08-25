// indexOf return the index of 1st element it finds in the array from the beginning. 

const names = ["Yuzan", "Sanjay", "Sandeep", "Sanjana", "Sanjay"];

const idx = names.indexOf("Sanjay");

names[idx] = "Deadpool";

console.log(names);  

const indxOfAbsentVal = names.indexOf("James"); // this will return -1
console.log(indxOfAbsentVal);  

// lastIndexOf return the index of 1st element it finds in the array from the end.

const index = names.lastIndexOf("Sanjay");
console.log(index);