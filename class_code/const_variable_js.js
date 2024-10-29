// ways of declaring variables and constants in JS-->

// let creates a variable - it can be changed-->

let school = 'Minneapolis College'
console.log(school)
school = 'Saint Paul College'
console.log(school)
school = 'Metro State'
console.log(school)
school = 'Minneapolis College'
console.log(school)

// what about creating constants?

const language = 'JavaScript'
console.log(language)
// language = 'C#'

// Why make a constant?

// if you have data in program that you know what it is, and you and you
// won't change it
// it is safer to make a constant because you cannot accidentally change it

const states = ['Minnesota', 'Wisconsin', 'Iowa']
// states = ['Califonria', 'Oregon'] // error replacing the data not allowed
states.push('Michigan') // we are allowed to modify the array
console.log(states)

// things to wach out for with constant arrays and objects 
const address = {
    number: '1501',
    street: 'Hennepin Avenue',
    city: 'Minneapolis'
}

// address = 1234
// adress = {}
// adress = { number:100, street: 'Main St.', city: 'Saint Paul' }

address.zip = '55403'
console.log(address)

// you can modify the object, eg new properties
address.street = 'Hennepin Ave'
console.log(address)

// you can't replace the entire project

// how to choose let vs const
// not sure? use let
// if you won't change data, use const
// if you need to change data then use let

