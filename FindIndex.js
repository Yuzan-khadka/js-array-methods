// similar to indexOf

// if the array of objects use findIndex, if the simple array use indexOf

let fruits = [
    { type: "Apple", quantity: 9 },
    { type: "Banana", quantity: 2},
    { type: "Orange", quantity: 8},
    { type: "Pear", quantity: 777}
 ];
 
 let myIndex = fruits.findIndex(fruit => fruit.type === "Orange");
 console.log(myIndex)