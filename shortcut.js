const money = 100;
let food;

// if(money > 200){
//     console.log('cha biscuit')
// }
// else{
//     console.log('biryani')
// }

// ternary operator
const food1 = money > 200 ? 'cha biscuit' : 'biryani';
// console.log(food1)


const num1 = 90;
// console.log(num1)
const numStr = num1 + '';
// console.log(numStr)

const input = '210'
// const inputNum = +input;
// console.log(inputNum)

const isActive = false;
const showUser = () => console.log('show user on the display')
const hideUser = () => console.log('hide user on the display')

isActive ? showUser() : hideUser()