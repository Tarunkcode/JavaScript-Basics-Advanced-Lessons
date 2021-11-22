const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
}

// Only change code below this line
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
// alternative by using assignment desytructive version

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST
/*se destructuring assignment with the rest parameter to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted
 */
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeFirstTwo(list) {
  "use strict"
  // change code below this line
  const [a, b, ...arr] = list
  // change code above this line
  return arr
}
const arr = removeFirstTwo(source)
console.log(arr) // should be [3,4,5,6,7,8,9,10]
console.log(source) // should be [1,2,3,4,5,6,7,8,9,10];

/*Use destructuring assignment within the argument to the function half to send only max and min inside the function.
 */
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
}

// Only change code below this line
const half = ({ max, min }) => (max + min) / 2.0
// Only change code above this line

/*Use template literal syntax with backticks to create an array of list element (li) strings. Each list element's text should be one of the array elements from the failure property on the result object and have a class attribute with the value text-warning. The makeList function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).
*/
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
}
function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`)
  // Only change code above this line

  return failureItems
}

const failuresList = makeList(result.failure)
//defining fn within the obj in ES5
const person = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`
  },
}
// in ES6 using Concise Declarative Functions
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`
  },
}
/*Use class Syntax to Define a Constructor Function */
/* In ES5, we usually define a constructor function and use the new keyword to instantiate an object.*/
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet
}
var zeus = new SpaceShuttle("Jupiter")
// in ES6
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet
  }
}
const zeus = new SpaceShuttle("Jupiter")
// e.g
// consider the program
// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot")
console.log(carrot.name) // Should display 'carrot'
// Use getters and setters to Control Access to an Object
/*Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.
*/
// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32)
  }

  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32
  }
}
// Only change code above this line

const thermos = new Thermostat(76) // Setting in Fahrenheit scale
let temp = thermos.temperature // 24.44 in Celsius
thermos.temperature = 26
temp = thermos.temperature // 26 in Celsius

/*
Handle a Fulfilled Promise with then
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

myPromise.then(result => {
  
});
*/
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false

  if (responseFromServer) {
    resolve("We got the data")
  } else {
    reject("Data not received")
  }
})

makeServerRequest.then(result => {
  console.log(result)
})
makeServerRequest.catch(error => {
  console.log(error)
})
