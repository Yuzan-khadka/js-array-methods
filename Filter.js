const numbers = [1, 2, 3, 4, 5, 6];

const evenNums = numbers.filter((num) => num % 2 === 0);

console.log(evenNums);

const person = [
    {name: "Yuzan",
     age: 26
    },
    {name: "Sanjay",
        age: 15
       },
       {name: "DeadPool",
        age: 40
       },
       {name: "Dan",
        age: 23
       },
       {name: "David",
        age: 10
       },
];

const adultPerson = person.filter((pers) => pers.age >= 18);

console.log(adultPerson); 

// remove duplicates
const names = ["Yuzan", "Sanjay", "Deadpool", "Wolverine", "Yuzan"];

const updatedNames = names.filter((name) => name !== "Yuzan");

console.log(updatedNames);