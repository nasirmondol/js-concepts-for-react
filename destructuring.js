const numbers = [20, 40]
// const first = numbers[0]
// const second = numbers[1]

// const [first, second] = [20, 40]

// const [first, second] = numbers

// function boxify (number1, number2){
//     const res = [number1, number2]
//     return res;
// }

// const boxify = [81, 15]

// destructurin Object
const {name1, age} = {name1: 'Htim', age: 40}
// console.log(name1, age)

const  {job, id} = {id: 1, job: 'developer', location: 'tangail', isRich: 'yes'}
// console.log(job, id)

const employee = {
    name: 'ruman',
    id: 02, 
    honest: 'no',
    specification: {
        height: 68,
        weight: 55, 
        drink: 'mojo',
        mark: [59, 39, 87, 55, 68],
        mobile: {
            price: 20040, 
            color: 'balck',
            brand: 'samsung'
        }
    }
}

const {name} = employee;
// console.log(name)

const {brand} = employee.specification.mobile;
// console.log(brand);


