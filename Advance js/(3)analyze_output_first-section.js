// execution context also called call stack
// when code is run on jsEngine first thing happens is global execution context created and when we run a function a new execution context is added a function execution context (holds this keyword , arguments, variable environment/ local env ( a place where we strore info that utilize in the function exe process, there might be actual information of var inside this call stack where exe is going on or it could be reference to var where actual info stored in somewhere heap perhaps there might be an obj))
// call stacks fully able to access global scope or their parent scope through scope chain in order to search a var it first looks in var env if its not there then it then exe context try to go down through scope chain and find var in global scope
// global execution context: 1. creation phase (holds global objects + this keyword and this === global object+ hoisting) and threw this global obj we can assign variables (note : after var assignment it is a part of the global object alongwith no. of other function thats why this var can use global functions directly) 2. execution phase where we actually run our code
// hoisting is the behaviour of moving variables and function declerations to the top of thier respective environment during compilation phase. Variables are partially hosted and function declerations are fully hosted
// in case if we reserve memory by using let and const keyword and try to access them before initialization then it gives me refError
// e.g 1
console.log("1-----------") // prints 1-----------
console.log(sing()) // prints " ohhh la la la"
console.log(teddy) // undefined
var teddy = "bear"
console.log(teddy) // print bear
function sing() {
  console.log(" ohhh la la la")
} // sing function return undefined
//console.log(laugh()) // throw error laugh is not defined since jsEngine no lognger see function keyword directly instead it only able to see opening parenthesis thats why laugh() is never hoisted and remains undefined
;(function laugh() {
  return "Haaa haa ha "
})
// e.g 2
var favouriteFood = "grapes"
var foodThoughts = function () {
  console.log("original favourite food is : ", favouriteFood)
  var favouriteFood = "sushi"
  console.log("New favourite food is : ", favouriteFood)
}
foodThoughts() // guess the output

// Funntion expression
var canada = () => console.log("cold")

// Function decleration
function india() {
  console.log("warm")
}
//function invocation / calling /  execution
india()
canada()
// arguments in js
function marry(p1, p2) {
  console.log(
    "arguments is passed in the format of object {key, value pair} as shown or illustrated here",
    arguments // arguments object is created inside only function execution context and cant be passed to another fn exe context reside on top or below of it
  )
  console.log(Array.from(arguments)) // make Array from arguments object and print that here
  console.log(`${p1} weds ${p2} lets toast for them`)
}
marry("Ron", "lily")
// there are some cases where we wanna iterate or loop threw over arguments instead of accessing them regularly here aguments looklike array but its moreover to that

function marry2(...args) {
  // ...args throws the array of arguments and we can use that to iterate over arguments
  console.log("arguments", args)
  console.log(Array.from(arguments)) // convert arguments object in array and print that here
  console.log(`${args[0]} weds ${args[1]} lets cheers for them`)
}
marry2("shruti", "ron") //output: shruti weds ron lets cheers for them
marry2() // output:
// arguments []
// []
// undefined weds undefined lets cheers for them

function two() {}
function one() {
  two()
}
var isValid = false
one()

// lexical scope also called static scope
// function lexical environment in which we can dig down from current execution sccope into below one  exe scope only and can find out targetted info
// In JS our lexical scope(available data + var where the function was defined ) determines our available variables. Not where the function is called (dynamic scope)
function sayMyName() {
  var a = "a"
  // we can  only  access var a
  return function findName() {
    var b = "b"
    console.log(a) // acessable
    //console.log(c) // not accessable reference error
    return function printName() {
      console.log(a) // a
      console.log(b) //b
      return console.log("Tarun Kumar")
    }
  }
}
sayMyName()()() // Tarun Kumar
// [[scope]] refers to parent scope  === lexical environment
// by using eval() or with we can actually change the scope from as it is works in jsEngine or redefine it how should be scope works here
// 'use strict'
function weird() {
  height = 50
  return console.log(height)
}
weird() // prints 50 but for height we dont reserve any memory so you can see here js showing weird nature this is called leakage of global var , height first search in var env of weird call stack its not exist there thats why now search for height starts is in global scope it is not there also so it will create height by its own for you not not throwing any error. to prevent js from this weird nature we can use 'use strict' above function defination

// function scope vs block scope
if (true) {
  var secret = "1234"
  let hiddenNumber = 123
  const x = "Tare"
}
console.log(secret) // function scope accessable in global scope also
// console.log(x) // block scope not accessable in global scope
// console.log(hiddenNumber) // block scope not accessable in global scope
// note in if block or for loops we try or prefer scope would be block scope
function loop() {
  for (let i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log("final", i)
}
//loop() // in line 110 we are trying to print value of i beyond or o/s of their scope so it throw an error i is not defined , but if i is declare as  var it prints result so here we have to use i as var to show o/p

// issues of using global variable
// to minimize the use of global exp iife was introduced in modern js
// inside of iife no global property will gonna created means all the properties that is written inside iife is available for only same scope where it is defined but however it can use the properties defined in global exe context
// iife enables us to attach private data to functions and it creates a fresh environment to us so that we dont pollute our global exe context ,we wanna make sure we can wrap things inside functions to scope things inside their own environment and minimize the use of data that we palce on the global exe context.

// this keyword
// this is the object that the function is a property of => means we have an object and that obj has some function and inside of this function when we do something we have access to the this keyword and this refers to the obj that function has the property of e.g,
// this gives global object window but in some cases we dont want that this points to global/window object as it does by default

// significance of this keyword 1. gives methods access to their object and 2. execute same code for mul objects
const obj = {
  name: "Billy",
  sing() {
    return console.log(`lalalala  ${this.name} `)
  },
  singAgain() {
    return console.log(this.sing() + "!")
  },
}
obj.singAgain()

function importantPerson() {
  console.log(this.Name) // this refers to global context here
}
const Name = " Tarun Kumar"
const obj1 = {
  Name: "Cassy",
  importantPerson: importantPerson,
}
const obj2 = {
  Name: "Jacob",
  importantPerson: importantPerson,
}
importantPerson() // global obj calling importantPerson
obj1.importantPerson()
obj2.importantPerson() // obj2 calling importantPerson method
// above we can see that importantPerson method define once and multiple objects can call that in global scope window

const a = function () {
  console.log("a", this) // this ref to global  obj, prints a <ref *1> Object [global]{...obj_prop}
  const b = function () {
    console.log("b", this) //b <ref *1> Object [global]{...obj_prop}
    const c = {
      hi: function () {
        console.log("c", this) // this ref to {hi: f}
      },
    }
    c.hi // hi is the property of obj c
  }
  b() //window.a(b()), so we can see window or global obj call b() INSIDE a() that's why this inside b ref to global window, {parent of b exe context is a exe context and parent of a() exe context is global window therefore indirectly b link or ref to global window or both a and b is the property of global obj }
}
a() // window.a(), this ref to window obj since a() is the property of its parent window global obj

// everything in JS is actually lexically scoped how you write it determines when we have a var except for the this keyword , this keyword is actually dynamically scoped i.e, it does not matter what is written it matters how the function is called
const obJ = {
  naam: "TarunKumar",
  sing() {
    console.log("c", this) // this refers to obJ , obJ.sing()
    var anotherFunc = function () {
      console.log("d", this) // therefore<ref *1> Object [global]{...globalProp}, now this is weird why here this ref to global window while its parent scope ref to obJ scope why it happens is because anotherFunc does not directly calling by obJ insted its called by sing() thats why this keyword inside anotherFunc does not pointing or refering to obJ instead to this it is pointing to global object window
    }
    anotherFunc()
  },
}
obJ.sing() // therefore { naam: 'TarunKumar', sing: [Function: sing] }

// to overcome above issue we have three ways 1) by returning the reference of function to the function who called it 2). using arrow function for where we use this keyword since arrow functions are lexically bound i.e, arrow function has a lexical;y bound 'this' behaviour unlike normal function 3) by a variable which stored the reference of its parent object and then using it where ever we want
// 1st way
const obJ1 = {
  naam: "TarunKumar",
  sing() {
    console.log("e", this) //
    var anotherFunc = () => {
      console.log("f", this) //now here this refers where its parent scope pointing
    }
    anotherFunc()
  },
}
obJ1.sing()
// 2nd way
const obJ2 = {
  naam: "TarunKumar",
  sing() {
    console.log("g", this) //
    var anotherFunc = function () {
      console.log("h", this) //now here this refers where its parent scope pointing
    }
    return anotherFunc.bind(this)
  },
}
obJ2.sing()
obJ2.sing()()

// 3rd way
const obJ3 = {
  naam: "TarunKumar",
  sing() {
    console.log("i", this)
    var self = this // this refers to the obJ3 i.e, in its parent scope
    var anotherFunc = function () {
      console.log("j", self) //self refers where as we designed it at time of its creation
    }
    anotherFunc()
  },
}
obJ3.sing()

// in order for us to manipulate the this keyword there are three imp methods : call(), apply(), bind()
const wizard = {
  naam: "Merlin",
  health: 50,
  heal(num1, num2) {
    this.health += num1 + num2
    return console.log(this.health)
  },
}
wizard.heal(40, 20) // prints 110
const archer = {
  naam: "Robin Hood",
  health: 30,
}
console.log("1", archer) //prints 30, here we can see initially archer health is 30
// borrow heal method for archer from wizard by using call (,so we use call for make our code clean and not to be compelled for writing same code multiple times)
wizard.heal.call(archer, 40, 22)
console.log("2", archer) // prints 92, after borrowing heal power from wizard archer health becomes 100 from 30

// Apply and call are differ in terms of parameters call() takes parameters one by one and for apply() parameter gives as an  array, both the methods use for borrowing method from other objects
archer.health = 30
wizard.heal.apply(archer, [22, 10])
console.log("3", archer) // print 62
// bind() RETURNS a new function with a certain context and parameters, and its usually  used when we wants a function to be called later on with a certain type of context or certain type of type of this keyword
archer.health = 30
const healArcher = wizard.heal.bind(archer, 40, 30)
healArcher() // run healArcher function returned by bind()
console.log("4", archer) // print 100

// function currying : partially giving a parameter to  the function
function multiply(a, b) {
  return a * b
}
let mulByTwo = multiply.bind(this, 2) // this refers to global obj
console.log(mulByTwo) // prints [Function: bound multiply]
console.log(mulByTwo(4)) //8

// context vs scope
// scope is function based where we see upto what extent a var has access to the function when function invoked and conttext is moreover a object based thing whats the value of this keyword which is a refrence to the object thats owns that current execution code, context is most often determine by how a function is invoked with the value this keyword and scope refers to the visiblity of variables
