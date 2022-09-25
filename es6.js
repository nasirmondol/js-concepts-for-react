const numbers = [10, 69, 30, 87, 28, 97, 45, 22, 77]

const student = {
    name: 'Ayman ali',
    age: 20, 
    id: 102,
    friends: ['nabil', 'sahriya', 'jamil', 'rukon']
}

// Templet string
const aboutMe = `My name is ${student.name} and my age is ${student.age}.
My friend is ${student.friends[1]}`
// console.log(aboutMe)

// 2. arrow function
const getFifty = () => 50;
const addTwoNumbers = (x, y) => x + y;
const isEven = x => x % 2 === 0

const multiply = (num1, num2) =>{
    const result = num1 * num2;
    return result;
}

// spread operator
const newNumbers = [...numbers]

// create a new array from the old array and added a new element
const newArray = [...numbers, 800]
console.log(newArray)

numbers.push(120);
numbers.push(120);
numbers.push(120);
numbers.push(1900);
numbers.push(1900);
numbers.push(1900);
console.log(newNumbers)
console.log(numbers)


