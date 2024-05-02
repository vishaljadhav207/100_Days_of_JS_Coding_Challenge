//program 30 : Convert Object to array and vice versa

const obj = [
    {
        name: "Keanu Reeves",
        age: 50,
        city: "America"
    },
    {
        name: "Tom Hanks",
        age: 65,
        city: "America"
    }
];

const valuesArray = Object.values(obj);
console.log(valuesArray); 

let entries=Object.entries(obj)
console.log(entries);
console.log(entries.flat());

let newObj=Object.fromEntries(entries)
console.log(newObj);