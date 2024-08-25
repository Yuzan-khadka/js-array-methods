//  Reduce function takes an array and compresses it to one single value
 
 const numbers = [10, 2, 50, 18, 1, 6];

//  getting total sum of numbers in array
 const total = numbers.reduce((prevVal, currentVal) => prevVal + currentVal, 0);

 console.log(total);

//  getting max value in array
 const maxValue = numbers.reduce((prevVal, currentVal) =>  {
    if(currentVal > prevVal){
        return currentVal;
    }else{
        
        return prevVal;
    }
    
 }, -Infinity);

 console.log(maxValue);


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

const totalWorthOfProd = products.reduce((prev, item) => prev + (item.price * item.quantity)  , 0);

console.log(totalWorthOfProd);
