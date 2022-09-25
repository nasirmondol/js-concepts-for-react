const products = [
    {name: 'laptop', price:  50000, color: 'black', brand: 'hp'},
    {name: 'mobile', price:  19000, color: 'golden', brand: 'iphone'},
    {name: 'watch', price:  1000, color: 'yellow', brand: 'raymond'},
    {name: 'camera', price:  22000, color: 'black', brand: 'canon'},
    {name: 'Television', price:  18000, color: 'red', brand: 'national'},
];

// const names = products.map(element => console.log(element.name))
// console.log(names);

const prices = products.map(price => price.price)
// console.log(prices);

// products.forEach(product => console.log(product.name))

// filter
const likeProducts = products.filter(product => product.price >= 20000)
// console.log(likeProducts);

const specificName = products.filter(product => product.name.includes('e'))
// console.log(specificName);

const specialOne = products.find(produc => produc.name.includes('l'))
console.log(specialOne)
