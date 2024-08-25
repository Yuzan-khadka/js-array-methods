// find compares the value and if the value is in the array it returns the same value or else undefined.

const fruits = ["Apple", "Banana", "Citrus", "Grapes", "Mango"];

const res = fruits.find((fruit) => fruit === "Citrus");

console.log(res); 

const person = [{
    name: "Yuzan",
    age: 26
},
{
    name: "Sanjay",
    age: 18
},
{
    name: "Yukon",
    age: 23
},

];

const age = person.find(findAge).age;

function findAge(per) {
    return per.name === "Sanjay";

}
 
console.log(age); 