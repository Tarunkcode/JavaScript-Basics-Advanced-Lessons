// import Client from "./in_depth" //syntax we use in many  other different libraries but here in js it does not work

const Client = require("./in_depth.js")

const mrSinghal = new Client("mrSinghal", "mrsinghal@nomail.com")

console.log(mrSinghal.getInfo()) // {'mrSinghal', 'mrsinghal@nomail.com' }
console.log(mrSinghal.getInfo().email) // 'mrsinghal@nomail.com'

//SYNTAX : obj_name.methodName(argument) to add elements inside objects
mrSinghal.getDemand("responsive website")
mrSinghal.getDemand("made it under $10 only")

console.log(mrSinghal.demandList()) // [ 'responsive website', 'made it under $10 only' ]

let demmand = mrSinghal.demandList()
demmand.forEach(c => console.log(c)) //responsive website \n made it under $10 only

// TODO: find out how many total demands are there and print out proper info like you have total ${this no. of demand} and List of demand is : ${demandList}

var numberOfDemands = mrSinghal.demand.length
// console.log(numberOfDemands)

console.log(`client has ${numberOfDemands} demands and demand list is here : `)
for (let i = 1; i <= numberOfDemands; i++) {
  console.log(`(${i}) ${mrSinghal.demandList()[i - 1]}`)
}
