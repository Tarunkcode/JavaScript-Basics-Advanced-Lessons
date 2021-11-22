// mojority of languages consider {} is scope thats why conditional statements and loops has scopes in programming l/g like c/c++/java
// but in js function is conside as a scope by using let keyword we can consider {} as scope in js

// var v/s let

console.log(name) // undefined
var name = "Tarun" // In front end var is good to use bcz we dont want much errors

//console.log(lastName);// error  Cannot access 'lastName' before initialization
let lastName = "kumar" // In backend let is good to use bcz error is good thing in comparision with undefined

if (true) {
  var fighter = "strong"
}
console.log(fighter) //accessable here but in backend  development it cant be accessable ouside its scope beside this after end of scope var should be disposed off

if (true) {
  let fighterPlane = "Tejas"
}
//console.log(fighterPlane);//not accessable fighterPlane not undefined , here {} works as a scope

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }
//  In for loop by default let is given for index ele since after exe of for loop it should disposed off else it will create messs ouside the for loop if it exist

// CONCLUSION : if anybody wants to go with the classic way  of thinking that scope is all like global context and execution context in functional way he can use the var keyword and can still continue use the language but programmers for back end use let keyword and he can compare all the languages with c/c++ go or swift where scope is undefined with {}

// Template Literals in javascript
// back ticks are string literals

var name = "tarun"
var fullName = `${name} kumar`
var food = "tarun's chocklet"
console.log(food)

var food = 'tarun"s chocklet'
console.log(food)

console.log(fullName)
console.log(fullName.charAt(0)) //t
console.log(fullName.endsWith("?")) //false
console.log(fullName.includes("tarun")) // true
console.log(fullName.toUpperCase()) //TARUN KUMAR

// MAPS in Js
var myMaps = new Map()
myMaps.set(1, "uNO")
myMaps.set(2, "DOS")
myMaps.set(3, true)
myMaps.set(4, 3)
console.log(myMaps) // prints Map(4) { 1 => 'uNO', 2 => 'DOS', 3 => true, 4 => 3 }

// accessing MAPS

for (let key of myMaps.keys()) {
  console.log(`key is ${key} `)
}
for (let value of myMaps.values()) {
  console.log(`key is ${value} `)
}
for (let [key, value] of myMaps) {
  console.log(`key is ${key} and value is ${value} `)
}
// accessing maps with for of loop we first get key and then values

// accessing with for each loop
myMaps.forEach(k => {
  console.log(`${k} `)
})
myMaps.forEach(v => {
  console.log(`${v} `) // prints keys
})
// myMaps has the access of forEach loop and it will first give / print us only values
myMaps.forEach((v, k) => {
  console.log(`${v} and key is ${k}`)
})
// if we use forEach then always it first prints values and then keys actually forEach  loops is the classic ways of itreration in which we are not dealing  with indexes but it is value here forEach  loop keys consider as indexses on over loop iterate

myMaps.delete(2) // delete key-value at key 2
console.log(myMaps) // prints Map(3) { 1 => 'uNO', 3 => true, 4 => 3 }

// Destructuring data
// pickUp data

// Destructuring of arrays

const user = ["Tarun", 3, "Admin"]
const [myName, courseCount, role] = user
console.log(courseCount)
console.log(role)

// destructuring objects

const myUser = {
  name: "Tarun",
  countCourse: 3,
  Myrole: "SubAdmin",
}
var { name, countCourse, Myrole } = myUser // note : strictly need to have same keys as in the structure that is subjected to destructure
console.log(name)

var maximum = Math.max(2, 4, 5, 2, 4, 5, 10, 12, 13)
console.log(maximum) //13

var obj = {}
Object.assign(
  obj,
  { x: "Tarun", y: 33, z: true },
  { p: "Rahul", q: "nobody", r: 0 }
)
console.log(obj)

function sumOne(a, b) {
  return a + b
}
console.log(sumOne(5, 4)) //print 9
// what if
const arr = [2, 3]
console.log(sumOne(arr)) // type of the data does not match

// here spread and REST operators in javascript came into the picture
// ...var_Name is called spread operator and sometime REST operator as well its depends on acc to the challenge that we are facing on , usually var_Name is args
// here function expects the values of a and b would come as individual but it gets value as array (bunch of values) then fn does not identifing what is going on and in these cases its normal to happen it prints same values as it is with undefined

// see what is  the significance of spread operator
console.log(sumOne(...arr)) // print 5 , argument uses spread opr

// spread obj spread the values from a bunch and pass it on as one by one
// here spread opr is used with array but it is works equally fine with different other structure as well like obj or any other

function sumTwo(...args) {
  // if we dont sure about how many values user pass at the time calling function then we pass REST opr as argument and then function is capapble to handle as many value as you pass but the most imp thing is values came in the array format only
  console.log(args) // take a look what this args look like it convet all the values pass as an argument into an array
  let sum = 0
  for (let arg of args) {
    sum += arg
  }
  return sum
}
console.log(sumTwo(2, 4, 3, 1, 4, 2, 8)) // print 24

console.log(sumTwo(arr)) // prints [[2,3]] 02,3 not worked so make sure you nver pass array to  the args for array you can only use spread actually REST opr and spread is logicallly perform opp reverse to each other

// it is possible to perform one opretion in first some values and another operation on other values
function sum_mul(a, b, ...args) {
  // first two value consider as individual values and all other as arrays
  let multi = a * b
  console.log(args) // now ignore and print all values except first two values
  let sum = 0
  for (let arg of args) {
    sum += arg
  }
  return [sum, multi]
}
console.log(sum_mul(2, 4, 3, 1, 4, 2, 8)) // prints [8 ,18]

// Classes
// like a blueprint where we define how things should look like

class Client {
  constructor(clientName, clientEmail) {
    this.clientName = clientName
    this.clientEmail = clientEmail
  } // constructor is a meathod which works as sooon as an object is created and constructor is only one which take responsiblity to create obj
  demand = [] //1. array declare without datatype like var , const , let inside class since its like blueprint for obj and classses does not reserve memory 2. to declare demand as private threout the class just simply change the var name from demand to #demand and use #demand as a var name threw out the class decleration
  getInfo() {
    return { name: this.clientName, email: this.clientEmail }
  } // not need to use function keyword to define a method inside a  class  in js

  getDemand(details) {
    this.demand.push(details)
  } // it is setter here we want to set a value which is private to the class
  demandList() {
    return this.demand
  } //demandList is a getter: we create method through which  a variable (which is demand here) manipulated , getter is a method which helps you to grab some of the info from class which is private but in this case var demand is not private but we use getter here for only protect out data demand so that not anyone directly access your obj or var
  login() {
    return console.log("log in...")
  } //if we use static keyword before method name then it makes this property private even not child classes can access that
}
// getters and setters are oftenly declare with name as getter() and setter but it's not compulsary to use as we show in this case we use getters and setters with different name getDemand as setter and demandList as getter
//  in getters we just return a var and not expect any var to pass as arg and in setter we actually expect some parameter
// classses alone does not able to work it need to create some obj for their functionality
// classes also comes with a method call constructor, if you don't create this method inside class automatically class will  create one which is empty for you

// need obj to use class
// let mrSinghal = new Client("mrSinghal", "mrsinghal@nomail.com")

// keep safe class and use them in another seperate file in classImport.js
module.exports = Client // now we can use Client class in any another file

const rock = new Client("rock", "rock@nomail.com")
console.log(rock.getInfo())
rock.getDemand("Angular Bootcamp")
console.log(rock.demandList()) //it  is access through a method called demandList() this can access and print demand list even if our var demand is private because demandList() is a getter and that's why getter is needed

console.log(rock.demand) // it is direct access to the var demand, it works here but if demand var declare as private var threw out the class then it is undefined

// Inheritance in js

// forming a child of a class that has or access all the properties of their  parent class and other additional property as well

// class merchant and that can access all  the properties of client class like its demandList

class Merchant extends Client {
  constructor(Name, Email) {
    super(Name, Email)
  }
  getMerchantInfo() {
    return "I am the merchant of the wesite"
  }
  // how to overwrite some property of parent class for child class, this is done by simply again define that var or method in child class with same name  as in parent class
  login() {
    return "logIn successful for merchant"
  }
}
var webStore = new Merchant("Tarun", "tarun@nomail.com")
console.log(webStore.getMerchantInfo()) //  prints 'I am the merchant of the wesite'
// if we try to access details of client from obj of merchant

console.log(webStore.getInfo()) // undefined if we dont use constructor with super keyword

//webStore.login()// prints log in...but if login() in Client class is static then it throws an  error that login() is not defined

console.log(webStore.login()) //prints "logIn successful for merchant"

// TODO: just try to do some more research on super keyword or we say method in js

// Event Loop

// TODO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

const uno = () => {
  console.log("i am one")
}
const dos = () => {
  setTimeout(() => {
    console.log("Wooohooooo")
  }, 3000)
  console.log("i am two")
}
const tres = () => {
  console.log("i am three")
}
// uno()
// dos()
// tres()
// see the o/p: uno() finished exe first then dos() starts its exe now Wooohooooo is a part of big picture of website it takes so much amt of time to processed therefore event loop said  wooohooooo is processing in background once it is processed completely it will print till then you can process next peice of code

// Promise , async and await  in js

const first = () => {
  return "i am first"
}
// const second = async () => {
//   setTimeout(() => {
//     return "i am second"
//   }, 3000)
// }

const ii = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am two") // not to be return because it  is already used once i.e, why resolve
    }, 3000)
  })
}
const three = () => {
  return "i am third"
}

const callMe = async () => {
  let valOne = first()
  console.log(valOne)

  // let valTwo = second()
  // console.log(valTwo) //undefined , why? -- js is assuming that this value comes in an instant it wait for a while but it is not came up so js thinks it is not defined yet so it prints undefined but if we use async keyword at the time of defining second() then in that case it prints Promise {undefined} means you promise me for a value here but its not fullfilled

  let valii = await ii()
  console.log(valii)

  let valThree = three()
  console.log(valThree)
} // once callMe() method is asynchronous then its var or methods can use await keyword and that says this is important so untill unless i  am finished ii() doing entirely dont leave me here so it wait for its finishing no matter what time it takes entire peice of code will wait for completing exe of this particular one ele in which we use await keyword

callMe()

// how we can handle reject and both resolve and reject at a time

// if promise is resolve then we make a chain of then or if it rejects then we use try catch to handle error
