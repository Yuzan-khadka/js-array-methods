const numbers = [1, 2, 3, 4, 5];

let total = 0;

numbers.forEach((num, index, arr) =>{

const intiTotal = total;
 total  = total +  num;
 console.log( `${num} + ${intiTotal} = ` + total);
} );

// forEach method cannot be assigned to new variable
const newNum = numbers.forEach((num, index, arr) => {
    return num * index;
});

console.log(newNum)