/* map --> map doesn't change the original array  */
const letters = ["a", "b", "c", "a", "c", "d", "a", "b"];

let count = {};

letters.map((letter) => {
  if(count[letter]){
     count[letter] = count[letter] + 1;
  }else{
    count[letter] = 1;
  }
}) 
 
console.log(count);


const numbers = [1, 2, 3, 4, 5];

const doubleNum = numbers.map((num) => num *2);

console.log(doubleNum);

// with objects

const products = [
    {
        name: "laptop",
        price: 3000,
        quantity: 3,
    },
    {
        name: "mobile",
        price: 1000,
        quantity: 6,
    },
    {
        name: "tablet",
        price: 1500,
        quantity: 2,
    }
];

// this returns array and we can make it return array of objects
const totalProdValue = products.map((item) => {
    return({
        name: item.name,
        totalPrice: item.price * item.quantity
    });

});

console.log(totalProdValue);
