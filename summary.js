const x = 110;
const y = 390;

const numberObj = {
    x: x,
    y: y
}

// shortcut
const numberObj1 = {x, y};

const name = 'Rahim';
const age  = 39;
const manObj = {
    name: name,
    age: age
}
// shortcut
const manObj2 = {name, age};

const numbers = []
// const arrays = numbers.map(number => number.length)
// numbers.forEach(number => console.log(number.length))
// console.log(arrays);

const name0 = 'Hero';
const age0 = 34;
const person = {name0, age0}; 
// console.log(person);

const person1 = { name : "Babe" }
// person1.name;
// person1['name']
person1[name]
// console.log(person1)

const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;
// console.log(ratName)

let person22 =null;
console.log(person22 ? person22 : "person is null");