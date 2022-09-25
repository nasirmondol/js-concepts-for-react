const student = {
    name: 'Ayman ali',
    age: 20, 
    id: 102,
    friends: ['nabil', 'sahriya', 'jamil', 'rukon']
}

const stJson = JSON.stringify(student)
// console.log(student)
// console.log(stJson)
const stParse = JSON.parse(stJson)
// console.log(stParse)

const keys = Object.keys(student);
// console.log(keys)
const value = Object.values(student)
// console.log(value)

const numbers = [39, 27, 87, 90, 11, 55]
// numbers.forEach(number => console.log(number))
const number = numbers.map(num => num*2)
// console.log(number)

const products = [
    {name: 'laptop', price:  50000, color: 'black', brand: 'hp'},
    {name: 'mobile', price:  19000, color: 'golden', brand: 'iphone'},
    {name: 'watch', price:  1000, color: 'yellow', brand: 'raymond'},
    {name: 'camera', price:  22000, color: 'black', brand: 'canon'},
    {name: 'Television', price:  18000, color: 'red', brand: 'national'},
];
// console.log(products)



const newProduct = {name: 'webcam', price: 2070, color: 'blue', brand: 'laltu'}
const remaining = products.filter(phone => phone.name !== 'mobile');
console.log(remaining)
const newProducts = [...products, newProduct]
console.log(newProducts)

