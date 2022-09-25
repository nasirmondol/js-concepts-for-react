// 1. How to decleare variable using let and const

const myName = 'Nasir';
let season  = 'winter';
season = 'rainy';

// 2. Basic 6 condition > < === !== >= <=

// 3. multiple condition

// if(myName === 'nasir' || season === 'rainy'){
//     console.log('now I feel good')
// }
// else if(myName === 'Nasir'){
//     console.log('Its me')
// }

// else{
//     console.log('Its not me.')
// }

// 4. Array decleare

const numbers = [10, 69, 30, 87, 28, 97, 45, 22, 77]
const numberAmount = numbers.length;
numbers.push(190);
const position = numbers.indexOf(10)

numbers[10] = 33
// console.log(numbers);

for(let i = 0; i <numbers.length; i ++){
    const number = numbers[i]
    // console.log(number)
}

// 5. function

function multiply(num1, num2){
    const result = num1 * num2
    return result;
}

const outPut = multiply(33, 87)


// 6. Decleare objects

const student = {
    name: 'Ayman ali',
    age: 20, 
    id: 102,
    friends: ['nabil', 'sahriya', 'jamil', 'rukon']
}
// console.log(student.friends[3])
