// fp believs in simplicity the idea is to make our code simple more understandable more oraganised and unlike oop here we kept our concerns {data and function(behaviour of data )}  seperate.
//fp dont have these concepts like classes and methods that belongs to object instead fn operates on well  defined data structures like array and object rather than belonging to that data structure.
// most imp pilllar in the development of fp is pure functions
// all obj that is created in functional programming are immutable and we avoid things like shared state or resources and that makes our code more secure

//Functional programming is about:

// Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

// Pure functions - the same input always gives the same output

// Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
// Amazon cart exxercise
// Implement  a function where we have
// cart : Array to add items before purchase
// Buy items : cart --> purchases :array
// 3 % tax to item in cart
// accept refunds
// track uesr history

// unsolved
// const user = {
//   name: "kim",
//   active: true,
//   cart: [],
//   purchases: [],
// }
// purchaseItem
// pure func return same output on particular input no matter how many time we run the function and has no side effeccts means function has to nothing to modify from outside of itself

const array = [1, 2, 3] // shared state that lives in global object means anybody can intteract and modify this data
function mutateArray(arr) {
  arr.pop()
}
mutateArray(array) // undefined bcz function does not return anything
console.log(array) // [1,2] means function actually modify input array beyond the scope of function
function mutateArray2(arr) {
  arr.forEach(item => {
    arr.push(1)
  })
}
mutateArray2(array) // [1,2,1,1]
console.log(array) // [1]

// below is the code that is pure function which does not affect the world ouside their scope means zero side effects and the influence of that function is cant seen or observed from anywhere in the code outside of that function scope

function removeLastItem(arr) {
  // there should not exist any shared state that defines outside of this function scope, so we create its local state
  const newArray = [].concat(arr) // passing the refernce of array ( bcz obj are passed by reference in js) , that is in global state and formed local newArray
  newArray.pop() // operate on local newArray
  return newArray
  // no where use shared state to operate inside function
}
console.log(removeLastItem(array)) // [1,2,1]
console.log(removeLastItem(array)) // [1,2] function does their task perfectly
console.log(array) // // [1,2,1,1] // actual data is conserved threwout the function opretion

// another e.g, of pure state function
/*The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array. When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called. */
function mulBy2(arr) {
  return arr.map(item => item * 2)
}
console.log(mulBy2(array)) //[2,4,2,2]
console.log(array) //[1,2,1,1] nothing change no side effects
function a() {
  console.log("hi")
} // is this is a pure function : No bcz console.log is browser specific any any log statement has some effect on browser ouside of function

// Referential Transparency : means nothing is changed to the code if we replace some code expression or function call to its resultant with no side effects
function a(num1, num2) {
  return num1 + num2
}
a(3, 4) // replace with 7 there nothing is changed , and also no side effects bcz func does not touch any global var this is  touching arguments and arguments are local var to the function
// can everything be in the code is pure function ?
// Nope the goal of fn pgm'ming is not to make our code with only 100% pure function, it is impossible to make code which composed of 100% pure function bcz console.log has sideeffect any communication to the outside world consider in side effects which is input output does, browser has to make https requests fetching calls and interaction with DOM to the code and thst's why any website with only pure function is impossible. by minimizing the side effects we only try to minimizing the bugs

// characteristics of pure functiuon
// 1. Onlyn perform one Task
// 2. Has return statement
// 3. code is predictable
// 4. Pure function -> no shared state
// 5. has some Immutable state inside the function
// 6.composable function

// Indepotence
function notGood(num) {
  return Math.random(num)
}
notGood(5) // always does what i expected to do
// multiple calls is still going to display expected results same results called idempotence even though its not pure function called idempotence
// another e.g,
function printNum(num) {
  console.log(num)
}
printNum(5) // run x no. of times still gets 5 every time even though its not pure
// delete a user from database, I can delete that user  once but every time i show database we gets same results return empty field showing there is no user . calling api with some sort os parameters by http get request and then we expects some results and fethching  expected api each time is same --> is idempotent
// in parallel or distributed computation like where multiple machine try to out some result parallely this idea of idempotance is extremely useful

// another important feature of idempotence is the idea of being able to calling itself again and again or inside yourself still gets the same expected result each time
console.log(Math.abs(-50)) // 50
console.log(Math.abs(Math.abs(-50))) //50
console.log(Math.abs(Math.abs(Math.abs(-50)))) // 50

// Imperative vs Declerative
// Imperative:specify What to do and how to do like computers are more imperative where instruction set is needed to perform a task
// Declerative : specify What to do and What should happen like humans are more declerative
//functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function. avaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the for loop mentioned above, you could call the map method which handles the details of iterating over an array
for (let i = 0; i < 100; i++) {
  console.log(i)
} // this is more imperative
;[1, 2, 3].forEach(i => console.log(i)) // this is more declerative the for loop
// jQuery is more imperative than react.js where for e.g, say just print it without telling how to print it

// immutability
// not changing the state or data instead making copies of state and each time return differen state
// in fp we have to maintain immutablility means it is not permitted to go outside the function and mutate the state
const obj = { name: "Tarun" }
function clone(obj) {
  return { ...obj }
}
// obj.name = "Nana"
// console.log(obj)
// mutate the actual data not permitted in fp
// if we want to mutate the name of object the ideal way in fp is
function updateName(obj) {
  const obj2 = clone(obj)
  obj2.name = "Nana"
  return obj2
}
const updatedObj = updateName(obj)
console.log(updatedObj) // updated obj
console.log(obj) // actual obj is preserved, immutability maintained

// structural sharing read about it to uderstand the memory performace while coping obj each time

// HIGHER ORDER FUNCTIONS AND CLOSURES
// in js fn are first class citizens which means we can have HOF and Closures
// HOF :either takes one or more fn as arg or return a fn as a result after called a call back
const hof = () => () => 5 // higher order fn
hof() //returns a function
hof()() //5
const hof2 = fn => fn(10)
hof2(x => console.log(x))
// closure
const closure = () => {
  let count = 0
  return function increment() {
    count++
    return console.log(count)
  }
}
var increment = closure()
increment() //1
increment() //2
increment() //3
//increment() mutate the state of count which is in outside of increment function and this is not allowed in functional pgm'ming but closures are frequently used to protect crucial data to mutate also and allow to access to the outside world in global scope
// remember fp is violate  when the state of data is mutate and not violate to access data outside of itself's scope as long as actual data is preserved code is said to belongs with fp
const crucialData = () => {
  let dontTouch = 55
  return function getCrucialData() {
    return console.log(dontTouch)
  }
}
var confidential = crucialData()
confidential() //55
confidential() //55
confidential() //55
// Observe actual data does not mutate and we have use closure to create privacy of our data with impossible to mutate from outside of its scope

// Currying : technique to translate eveluation over a fn that takes multiple arguments into evaluating a seq  of fn each with a single arg
// take a fn that takes multiple parameters and instead using currying modify it to a seq of fn that  takes single parameter
const multiply = (a, b) => console.log(a * b)
const curriedMultiply = a => b => console.log(a * b)
// to crete multiple utilty functions currying is used
const curriedMultiplyBy5 = curriedMultiply(5)
curriedMultiplyBy5(4) // 20

// Partial ApplicTION ia a way to partially apply a function its a processess of producing a function with smaller no. of arguments means taking a function and apply some of its arguments into the function so its able to remember those parameters and then it uses closure to later on be call with all the rest of the arguments

//Partial Application
const mult = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(10, 20)

// MCI Memoization : a special form of caching
function addTo80(n) {
  console.log("long time")
  return console.log(n + 80)
}
addTo80(5) //85
addTo80(5) //85

let cache = {}
function memoizedAddto80(n) {
  if (n in cache) {
    return cache[n]
  } else {
    console.log("long Time")
    cache[n] = n + 80
    return cache[n]
  }
}
console.log("1", memoizedAddto80(7))
console.log("2", memoizedAddto80(7)) // this call is not gone under long time
console.log("1", memoizedAddto80(8))
// ideally we dont want to fill cache completely that is living outside of function scope in global object, ideally its good to practice to have memory or in this case cache to live inside of this function and not polluting the global scope
// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) {
  let cache = {}
  return function (n) {
    if (n in cache) {
      return cache[n]
    } else {
      console.log("long time")
      const answer = n + 80
      cache[n] = answer
      return answer
    }
  }
}

const memoized = memoizeAddTo80()
console.log(1, memoized(6))
console.log(2, memoized(6))

// Compose
// idea that any sort of data transformation should be obvious its kind of like a convey belt we have data that gets processed by func and generetae o/p that is new form of data
// data --> fn1 --> {data} -->fn2 --> {{data}}...
// highly composable system provides components that can be selected and assembeld in various combination as desired
//fn1(fn2(fn3(50)))

//compose(fn1, fn2, fn3)(50) //Right to left
//pipe(fn3, fn2, fn1)(50) //left to right

const pipe = (f, g) => a => g(f(a))
const compose = (f, g) => data => f(g(data))
multiplyBy3 = num => num * 3
makePositive = num => Math.abs(num)
const mulBy3AndAbsoluteCompose = compose(multiplyBy3, makePositive)
const mulBy3AndAbsolutePipe = pipe(multiplyBy3, makePositive)
console.log(mulBy3AndAbsoluteCompose(-50))
console.log(mulBy3AndAbsolutePipe(-50))
// both pipe and compose results the same o/p

// Arity : no. of args that a function can take

// Amazon cart exxercise
// Implement  a function where we have
// cart : Array to add items before purchase
// Buy items : cart --> purchases :array
// 3 % tax to item in cart
// accept refunds
// track uesr history

// solved
const user = {
  name: "kim",
  active: true,
  cart: [],
  purchases: [],
}
const history1 = []
// using composable function
const composed =
  (f, g) =>
  (...args) =>
    f(g(...args))
//run the code and console.log the output
console.log(
  purchaseItem(
    emptyCart,
    buyItems,
    applyTaxToItems,
    addItemToCart
  )(user, { name: "laptop", price: 344 })
)
function purchaseItem(...fns) {
  return fns.reduce(composed)
}
// naive approach
// purchaseItem(user, { name: "laptop", price: 344 })
// function purchaseItem(user, item) {
//   return Object.assign({}, user, { purchases: item })
// }
function addItemToCart(user, item) {
  history1.push(user)
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })
}
function applyTaxToItems(user) {
  history1.push(user)
  const { cart } = user
  const taxRate = 1.3
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate,
    }
  })
  return Object.assign({}, user, { cart: updatedCart })
}
function buyItems(user) {
  history1.push(user)
  return Object.assign({}, user, { purchases: user.cart })
}
function emptyCart(user) {
  history1.push(user)
  return Object.assign({}, user, { cart: [] })
}
console.log("HISTORY", history1)

function refundItem() {}

function getUserState() {}

function goBack() {}

function goForward() {}
