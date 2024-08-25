// reverses the order of the element in an array.
// changes the array being called upon.

const sports = ["Football", "Baseball", "Volleyball", "Hockey"];

sports.reverse(); 

console.log(sports);


const str = "Coding is Fun!";
// here str is converted to an array using split method 
// then the str is reversed and again changed back to string using join method.
const res = str.split("").reverse().join(""); 

console.log(res);