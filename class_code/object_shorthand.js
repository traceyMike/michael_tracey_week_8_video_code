// classic way of creating objects
// works with let and with const

// let address = {
//  number: '1501',
//  street: 'Hennenpin Avenue',
//  city: 'Minneapolis'
// }

// console.log(address)
// or

// const address = {
//  number: '1501',
//  street: 'Hennepin Avenue',
//  city: 'Minneapolis',
// }

// console.log(address)

// often create objects from data in variables, for example
let number = '1501'
let street = 'Hennepin Avenue'
let city = 'Minneapolis'

// let address = {
//  number: number,
//  street: street,
//  city: city
// }

console.log(address)

// JS offers us shorthand - if you create an object with variables, 
// you can optionally ommit the property
// and JS will use the variable name as the property name

//let adress = {
//    number, // assumes the property name is number
//    street,
//    city
// }

// if needed, you can combine both syntaxes, if you want to use the same
// property
// but if you want to rename other properties

let address = {
    houseNumber: number, // create property called houseNumber with the value from number variables
    street, // create propert called street with value from street variable
    city
}

console.log(address)