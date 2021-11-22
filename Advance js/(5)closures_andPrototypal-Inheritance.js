// This file is designed more for theoritical understanding

//as we know so far is when we invoke a function we automatically gets two parameters this keyword and arguments keywords, and we learn that arguments is an array like objects and shows a lot of weird nature for looping and iteration so we avoid to use arguments instead we use spread opertaor.
// because of the arguments obj we can technically not have any parameter defined for a function and when we call that fn if add parameter to it  we can still grab them using the arguments keyword .
// when we defined a fn and the compiler looks our code lexically it determines what variable are available to us in variable environment and we also add scope chains and we have a few ways of invoking and creating functions

// function constructor
const fun = new Function("num1", "num2", "return num1+num2")
console.log(fun(2, 4))
// functions are objects in javascript thats why we are able to create function by new keyword like an object, we can pass them around like objects like things that contains data , in functions besides just performing actions in our code we can also store them as data and move them around

// here in js we can add properties to function as we do in the object and with the functions are special object with them we have access to some of the methods also called callable objects like apply(), call(), bind() , toString(), and some keywords like name , prototype, caller, length but with objects we dont have these methods and keywords.
function woohooo() {
  console.log("woohooo")
}
woohooo.yell = "ahhhh" // adding property to the function which is kind of special object
console.log(woohooo) // print function with adding property

// functions are first class citizens in javascript because of following define three property about functions in js
// 1). functions can be assigned to var and properties of objects
var stuff = function () {}
// 2). we can also pass function as arguments to another function
function a(fn) {
  return fn()
}
console.log(
  a(function () {
    console.log("hi there")
  })
) // prints 'hi there'
// 3). we can return function as a value to other function
function b() {
  return function c() {
    console.log("bye")
  }
}
b()()
var d = b() // pass function to a var as a value
d()
// so we can say functions are data in js not only performs actions for us they are also peices of DATA that can be pass around like first class citizens asif they were js types so anything you can do with other types we can do the same with a function

// we can add a default parameter to the functions as
function satellite(param = 1) {
  return param
}
console.log(satellite())
// higher order functions
// a function that can take a function as an argument or a function that return another function
// significance
// 1. suppose we have to make a system that use by both employee and managers and for manager it has to be more secure and updated with new featires as compared to normal employee login and this should be one generic system that uses by managers and employee both but for both some features are common and some features are different
// function simple (){} we only tell what to do to the function
// function withArgs(some arguments){} we can tell to the function on what data you should perform action and for every data actions are same i.e, defined inside the function
const giveAccessTo = Name => console.log("Access granted to ", Name)
function authenticate(verify) {
  let array = []
  for (let i = 0; i < verify; i++) {
    array.push(i)
  }
  return true
}

function letPerson(person, fn) {
  //higher order function that take fn as argument
  if (person.level === "manager") {
    fn(500000)
  } else if (person.level === "employee") {
    fn(100000)
  }
  return giveAccessTo(person.Name)
}
letPerson({ level: "employee", Name: "Prabhat" }, authenticate)
// with higher order functions we can define associate functions or functionality acc to specific data or in more words we can say for this specific data you please perform these actions also and for other data you have these functionality to perform (this is the significance of Higher order functions)

// higher order functions that return function
const mulBy = num1 => num2 => console.log(num1 * num2)
mulBy(3)(6) //18
const mulByTwo = mulBy(2) // we make functions subfunctions from hof
mulByTwo(5) //10
const mulByFour = mulBy(4)
mulByFour(5) //20
mulByFour(10) //40

// CLOSURES --

// note what is lexical scope : the js engine knows based on the where are code is written before we even run the code what var each function has access to.

// combination of functions and lexical environment from which it was declared closures allow a function to access variables from an enclosing scope or environment even after it leaves scope where it was declared .
// a closure returns function

function p() {
  let grandpa = "grandpa"
  return function q() {
    let father = "father"
    return function r() {
      let son = "son"
      return `${grandpa} >  ${father} > ${son}`
    }
  }
}
// as you can see function p() and function q() are higher order function and r() is simple function which prints a string
p() // return function q(), invoking fn p
p()() //return function r(), invoking function q
p()()() //print grandpa > father > son , invoking fn r()

// when fn p is invoked once a function execution context is created over global exe context in which under var environment grandpa is created and in the next line as when fn p() is returned fn q(), fn exe context for p() gets popped off and then a new function exe context over global exe context is created for function q() in which inside of var environment of fn q father is created and as when fn q is returned func r() it gets poped off and when we invoke fn r() then only we have global exe context and over that fn exe context for fn r(), and inside of var environment we only have son and in the next line when we try to print granpa which is actually neither in its var env nor in the global context (same for father) for function r(), however we can actually able to print grandpa and father when we try to print in func r() without any error so how it could be possible ?

// so here is your explanation for above ques , when we invoke function, a func exe context is created  over global exe context and when it return another function it gets popped off from the stack and all the essential data which resides in env var of func is not collected by garbage collector instead somehow jsEngine manage to keep reference of the data that is surely will be going to use in future , bcz of lexical environment in js jsEngine knows where what is written already even before running the code so engine knows what data  will be gonna use in future and it makes the closure of that essential data and store the refernce of that data inside closure somewhere in the heap
// closure are also called lexical scoping where write the functions matters and not where we call the function
const boo = string => name1 => name2 =>
  console.log(`${string} ${name1} ${name2}`)

// boo('hi')('tim')('becca')
const booString = boo("hi")
// when i call boo('hi) and added to booString var then if we wait for a time and jsEngine is running and then finally call booString(), even boo('hi') is off the stack, jsEngine stills remember 'hi' string for me inside closure thats is the significance of closures so that i can wait for a time and hold on info inside memory and that never gets deleted from memory
booString()
// parameters are treated just like local variables that can stored in var environments

// Exercise
function callMeMayBe() {
  const callMe = "Hi! I am now here!"
  setTimeout(function () {
    console.log(callMe)
  }, 4000) // how setTimeout works -> it gets sent the request to web api for starts a timer and when designated time is finished then we sent given function to callBack queue , and the callBack queue is gonna wait there untill the call stack is empty so callMeMay has been called its now popped out the stack, the the event loop is going push this function onto the stack and run it and its going to console log callMe
}
//callMeMayBe() // at the time where we console log callMe , actually callMe in popped out but even though because of closure we can still  use it and gets our o/p
// all the functions in the world of web api use the closure

// what if callMe is defined after function call ,  do you think still callMe is available for the function
// function callMeMayBe() {
//   setTimeout(function () {
//     console.log(callMe)
//   }, 4000)
//   const callMe = "Hi! I am now here!"
// }
// callMeMayBe()
// it does not matters where callMe is defined inside the code ,even it is const does not gets hoisted we does not not hoisting here instead this setTimeout function goes all the way inside web api world gets put in the call back queue, event loop push it back onto the stack but by that time we already ran this fn const callMe has already been created and assigned and because it sees that does not enclosing fn i.e, using it, its going to create a closure
// closure are memory efficient and it allows encapsulation
function heavyDuty(index) {
  const bigArray = new Array(7000).fill(":smile:")
  console.log("created")
  return bigArray[index]
}

console.log(heavyDuty(688)) // creating bigArray access it prints data and then destroyed
console.log(heavyDuty(688)) // creating bigArray access it prints data and then destroyed
console.log(heavyDuty(688)) // creating bigArray access it prints data and then destroyed
console.log(heavyDuty(688)) // creating bigArray access it prints data and then destroyed

// here heavyDuty is a func and suppose we use it repeatedly inside code at different places and beacuse it holds and use a very data inside var env bigArray , bigArray is creted inside the env var and then it return bigArray[index] and since nothing referencing it after returned bigArray , it gets destroyed and when we again require to access bigArray it needs to again call heavuDuty func create bigArray and then it again destroyed this would happen repesatedly as many no. of times we need bigArray , it takes lot of memory space and time to create it repeatedly. this is not sound very efficient so is there any way so that we created bigArray once and then have it inside memory and when we require to access bigArray more than once we can able to easily access them without creating it again. this is possible and done by using closure

const getHeavyDuty = heavyDuty2() // create bigData
console.log(getHeavyDuty(655)) //access data and print
console.log(getHeavyDuty(800)) //access the data and print
console.log(getHeavyDuty(3500)) // access data and print

function heavyDuty2(index) {
  const bigArray = new Array(7000).fill(":smile:")
  console.log("created again")
  return function (index) {
    return bigArray[index]
  } // here created closure return func and pass/ return reference to bigArray
}
// closure for (encapsulation of data : hiding the crucial info so that not everyone can access and manipulate them)
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0
  const passTime = () => {
    return timeWithoutDestruction++
  }
  const totalPeaceTime = () => {
    return timeWithoutDestruction
  }
  const launch = () => {
    timeWithoutDestruction = -1
    return ":boom:"
  }
  setInterval(passTime, 1000)
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime,
  }
}
const ohNo = makeNuclearButton()
console.log(ohNo.totalPeaceTime())
// console.log(ohNo.totalPeaceTime())
// console.log(ohNo.totalPeaceTime())
// console.log(ohNo.totalPeaceTime())
// console.log(ohNo.totalPeaceTime())
console.log(ohNo.launch())

// exercises on closure
// 1.
let view
function initialize() {
  view: ":car:k"
  console.log("view has been set!")
}
initialize() // initialize first time
initialize() // initialize second time
initialize() // initialize again,  its been three times
console.log(view)
// let we have a func called initialize and this func initialize some view on your webpage now may be somebody new on your developers team comes in and by mistake does not know that this thing should be called once and instead in your code they initialize it many times for here let it intialize it 3 times when we run code (as shown below ) perhaps even reseting the webpage and the user doing curling on the webpage
// so use your knowledge on closure and set the initialization only onces even somebody call initialize many times it should initialize only once

function initialize2() {
  let called = 0
  return function () {
    if (called > 0) {
      return
    } else {
      view: ":car:x"
      called++
      console.log("view has been set")
    }
  }
}
const startOnce = initialize2()
startOnce() // not work
startOnce() // not work
console.log(view)

// 2. we have,
// const array = [10, 43, 33, 4]
// for (var i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log(`at index ${i} we have the value ${array[i]}`)
//   }, 3000) // call back function that will be called in 3 sec
// }
// see the o/p and adjust the code so that we get the correct output
// by using let instead of var , since let allows us to use block scoping so that this block create a scope for each i so that i is scoped ,initially i is the part of global scope

// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log(`at index ${i} we have the value ${array[i]}`)
//   }, 3000) // call back function that will be called in 3 sec
// }
// we have one another way to make the code correct is by use of closure
// for (var i = 0; i < array.length; i++) {
//   ;(function (closureI) {
//     setTimeout(function () {
//       console.log(`at index ${closureI} we have the value ${array[closureI]}`)
//     }, 3000) // call back function that will be called in 3 sec
//   })(i)
// } // closures allow a function to access variables from an enclosing scope or outer scope env even after it leaves the scope in which it was declared because all that matters in js is where the function was written.

// ******************************************************************************************************
// prototypes in javascript + prototypal inheritence
// js uses something called prototypal inheritance means inheritance is an obj getting access to the properties and methods of another object, since arrays[] and functions() are objects{} in js so array obj and func obj get access to properties and methods of another object through the prototype chain

// run in browser to see code in action
// const t = []
//undefined
//t.__proto__ //enter to go up the prototype chain
// [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
// here we get a new object which holds all the methods or properties that are available for t[] or array obj and because of existence of prototypal chain we can access the proprties or methods of all the properties and methods that are resides in this new objects
//t.__proto__.__proto__ // enter to get base obj that everything is js gets created from including the functions  including arrays
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
// here we get a new object which holds other functions or properties that are available for objects bydefault in js and because of the prototype chain all the descendent of this object get access to these properties provided by the object
// e.g, t.toString() // t get access to the toString methods which is provided by js base Obj

// function s() {}
// undefined
//s.__proto__ // enter to go up the protype chain
// ƒ () { [native code] }
// here we get native function and this is our base function where all functions are created from
//s.__proto__.__proto__
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
//here we get base objects that all objects are come from

//const obj1 = {} //  creating obj1
//undefined
//obj1.__proto__ // enter
// here we get base object, obj1 inherits has a prototype chain upto this base obj
// obj1.__proto__.__proto__ // if we go again up after passing the base object then it gives me null means nothing is there, its null pointer - pointing to null
// note languages like c# ,  java , c++ uses classical inheritance and here javascript uses prototypal inheritance

// significance / pros of prototypal inheritance
let dragon = {
  name: "Tanya",
  fire: true,

  fight() {
    return 5 // return represent damaging intensity
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire` // template string
    }
  },
}
console.log(dragon.fight())
console.log(dragon.sing())

let lizard = {
  name: "kiki",
  fight() {
    return 1 // return represent damaging intensity
  },
}
//use bind() is not always good because sometimes some condition is putted on for the access of some func inside the object (as here fire should be true for access of sing method)and in that case if we try to borrow it, and if for the borrower object it is not possible to fulfill the condition(as here fire is not declare for lizard obj) for accessing the method then we cannot use that method for the borrower obj{} (as here lizard cannot access sing method it gives undefined ) then making a prototypal cahin/ inheritance is useful and with bind() we are able to borrow only one method at a time and just imagine if we have a very jumbo size object in which thousands of methods or properties we define and need to borrow those methods for another object also then use of bind () is inefficient

const singLizard = dragon.sing.bind(lizard) //if we try to borrow sing method for lizard it throw error fire is not defined
console.log(singLizard()) // undefined
//ctreate a prototype chain ; if we need to borrow bunch of properties from a big size object for another object
lizard.__proto__ = dragon // crete a link/ prototype chain from lizard to going up to dragon
console.log(lizard.sing())
console.log(lizard.fire)
console.log(lizard.fight()) // return 1 and not gonna borrow fight() method from dragon{} since lizard{} has its own fight() method
// through the use of prototype chain we are able to inherit all the properties and methods of dragon and overwrite anything that we have declared in our own object
// what is  the prototype chain of dragon()
console.log(dragon.__proto__) // return base object
console.log(dragon.isPrototypeOf(lizard)) //true; bcz bcz dragon is a the prototype of lizard ,isPrototypeOf() is the method from the base object
console.log(lizard.isPrototypeOf(dragon)) //false; bcz lizard is not the prototype of dragon

// lizard.__proto__ = dragon // we commented it from here because we already create this prototype chain
// after creating prototype chain we can print all the properties of object
for (let prop in dragon) {
  console.log(prop) // print all the properties of dragon
}
// how to print all the prop of lizard
for (let prop in dragon) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop) // print all the properties of lizard and not include the inherited property
  }
}
// note if jsEngine is unable to find the targerted in the current object then it goes up  the prototype chain for eg, here hasOwnProperty is not the part of lizard{} itself then it goes up the prototype chain to drangon and then up the base object and finds hasOwnProperty and we are able to use it jsEngine looks for you through the prototype chain
// prototype chain and scope chains are woking similar but these are two different things , scope chain checks scopes and goes down to context and finding method or var
// scope chain are like links to join or to give access into different var env into the context
// use of proto inheritance is in way is not very often we use it is very inefficient way to do this ,its bad for performance and there is different ways to inherit properties, sometimes we have to very often going to dive and deep into when we talk about object oriented programming so never wanna manually assign the prototype chain its going to mess up our js compiler in oop we will learn different ways to do this

// why this prototypal inheritance is useful
// the fact that objects can share prototypes means that you can have objects with properties that appoint to same place in memory .

// code run in browser
const obj = { name: "sally" }
obj.hasOwnProperty("hasOwnProperty") // false
// means obj itself does not have this as its own property, hasOwnProperty is exist up in the prototype chain
function a() {}
//as we know so far is all functions have call apply and bind
a.hasOwnProperty("call") //false; same if we try for apply bind it gives us false
a.hasOwnProperty("name") //true; name of the function is "a" itself
a.name // prints a

// function is a special kind of object it is a callable obj in which we have code() that can we invoked , we have an optional namefield, __proto__,undefined prototype : {} , we also have some properties(like call, apply, bind) that we can add to the function bcz its an object but it is not 100 % correct lets see how?

function mulByFive(num) {
  return num * 5
}
mulByFive.__proto__
// f () { [native code] } //base function where all functions are created from
// store base function as global variable by ringht clicking the func on browser and then we have temp1 in  which we store this basic function
//temp1.hasOwnProperty("call") //true; and here we have all properties and methods with access too
//temp1.name //print ""; no name
//actually all the properties reside in another function called base func going up throgh the prototype chain and not in actual func , this function furthur holds code() that can be invoked ,properties and a property called prototype : {call , bind , apply, __proto__} we cant access  properties hold by prototype directly by func dot propName instead we can access it by base func so first we have to reach to the base func and store it into some var and then with the help of that var we can access all that properties and if we go further up through the prototype chain we get base object (prototype:{hasOwnProperty : f() { [native code] } , __proto__, ...})and it points to the null if we go further up

mulByFive.__proto__
// f () { [native code] } // base function , where all the func comes from
Function.prototype
// ƒ () { [native code] } // gives the same since ƒ () { [native code] } points to prototype
Object.prototype
// base object
Object.prototype.__proto__ // null
// remember __proto__ is just reference or pointer to up the chain prototype: {} object

const array = []
array.hasOwnProperty("map") // false
array.__proto__.hasOwnProperty("map") // true
Array.prototype // Array here represents base array
//base array
array.__proto__
// base array
// so array.__proto__ point to the father Array.prototype

// As we said earlier inheritance by __proto__ is effincient way, so here below is one of the way of inheritance from one obj to other
let human = {
  mortal: true,
}
// if we create another object as this way
let socrates = Object.create(human) // Object represent for base object
// right now socrates is undefined , so to add properties in it
socrates.age = 45
console.log(socrates) //prints { age: 45 }
console.log(socrates.mortal) // true
console.log(human.isPrototypeOf(socrates)) //true

// only functions have the prototype property, means the thing that contain prototype : {...} is always be a function()
//the only time we will use prototype is using when we call constructor functions that usually starts with  capital letter and that contain the actually prototype or blueprint that we use
// as we discussed earlier
console.log(Object.prototype) // Object is object constructor creates an object wrapper to create new objects in javaScript
// we get base object
// and here we telling that prototype property only exist in functions but here base object shows it has prototype property
console.log(typeof Object) // prints "function"
// type of Object is function because it has prototype property
console.log(typeof {}) // prints "object"
// every function has a prototype property and it references to an object used to attached property that will be inherited by the object furthur down the prototype chain the last object in the chain is this built in Object.prototype (obj Constructor .prototype)
console.log(typeof Object.prototype) // prints 'object'
// remember Object is a functio because it  has prototype : {} prototype and the Object.prototype is what we called a base object this is very last peice or the very last obj that we can look for properties on before we point to null
console.log(String.prototype) //return base object for String that holds all the properties or method that is available for string

// Exercises to- extend the functionality of a built in object
// TODO: exercise #1 :
// we have a built in object called Date object it has a method called lastYear which prints just previous year that we give to the Date Object like below
// new Date('1990-10-10').lastYear() // prints 1989
// define Date object is your task

// add lastYear method to the built in object Date
Date.prototype.lastYear = function () {
  return console.log(this.getFullYear() - 1)
} // we cannot use arrow functions here and why ? do some research to get it by own first try to use arrow func here ans see the error
new Date("1990-10-10").lastYear() // prints 1989
new Date().lastYear() // prints 2020 , Date() holds current Year by default
new Date("1988-12-10").lastYear() // prints 1987

// TODO: execise #2
//  Modify .map() a built in method that we have with our js so that it print ':m:m' at the end of each item.

// console.log([1, 2, 3].map()) // prints 1:m:m, 2:m:m, 3:m:m
Array.prototype.map = function () {
  // now we can access or modify map  function
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + ":m:m")
  }
  return arr
}
console.log([1, 2, 3].map()) // prints 1:m:m, 2:m:m, 3:m:m
// we rearly use this .prototype property directly and you should not try to modify these inbuilt methods or properties
