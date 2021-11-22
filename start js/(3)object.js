// so far we have seen that every single time i want to create an object I am giving  user that its key value pair, lets get a case of a website where everytime a new user is signed up there are some properties that i want to assign to them what's there first name , their last name , creditCard details , email, ... ,courseCount in their account so i cannot mannually go ahead and define them so i  need to create a kind of prototype there that should follow that every single user gets up these properties should be filled up as well as the most imp thing is it should be a unique user in itself so everytime a new instance should be created

// functional approach  to define or create new objects (and that is recommended)
// User is an object or prototype , obj has set of properties(which  are subjected to create delete or overwrite later after defininig it) and after defining it we can create new instances of the objects and also can alter them

var User = function (firstName, courseCount) {
  this.firstName = firstName //object
  this.courseCount = courseCount // object
  this.getCourseCount = function () {
    console.log(`Course count is ${this.courseCount} `) //this .courseCount refers to object
  }
} //object

// creating new instances = objects
// let first user signed in is Tarun

var tarun = new User("Tarun", 2)
console.log(tarun) //undefined if we not use new keyword

var sam = new User("Sam", 1) // creating another instance on the left  and calling functional objects in the right
console.log(sam)
// jobs of new keyword :
// 1. it is responsible for actually using above define prototype
// 2. how many time we use a new keyword, a new copy of this entire object will be created
// 3. if we not using the new keyword then on a regular function call it gives undefined i.e, global obj here(as we know on a regular fn call this keyword points to global object)
// 4. first and foremost  new keyword make a copy of his define prototype and also move "this" keyword from global object to inside of this prototype here its user
//5. when using new keyword to call objects from a prototype call is not anymore a regular call thats why this time "this" keyword not pointing towards regular object
// 6. find all the such prototype define outside the actual defination of prototype and inject them in my prototype

// so far two instances  we have created and now they can easily access thier properties defined in its prototype
tarun.getCourseCount()
sam.getCourseCount()

// when we run this in browser console
var lco = { name: "Tarun" }
lco // print name: "Tarun" and __proto__: Object(define some properties that we can use in javascript by using prototype keyword)
lco.hasOwnProperty("name") //e.g, how to access all the properties define in __proto__ object

// prototype  keyword -- alter the object property or adding new properties to the object

// injecting other properties or methods i.e, define later for our prototype,if you want to add some more feature you dont go directly into where those objects or things define rather than this you can add other feature into the prototype as where you want outside without going to the actual defination of your prototype by using the prototype keyword in javascript

//e.g, here we add an object method (called getFirstName) for User and by prototype keyword it becomes a property for our User prototype and now all the instances which is ceated in previous or later (on writing this feature) can access this getFirstName property

// also not only this by using prototype keyword we can access or give  them more properties or you can give them more functions ,constructors ,  getters , setters directly inject and we are not touching actual  defination whre all other objects method are define we are injecting new methods

// here we injecting a new method called getFirstName, lets see how can we do that
User.prototype.getFirstName = function () {
  console.log(this.firstName)
}
// instances can use injected properties or methods
tarun.getFirstName()
sam.getFirstName()

// Obj Chaining

// how  to check or make sure that property are really exist on which a functional call performed else if we make a call or try to access functional obj based on properties define inside in object will give you undefined e.g

tarun.getFirstName() // try to replace for a while firstName with FirstName from User and commented out below if statement then run this command  throw undefined

// to make sure you should use below syntax when you access property or call functional object must be exist inside object

if (tarun.hasOwnProperty("firstName")) {
  tarun.getFirstName()
}
// tarun.getfirstName() //error getfirstName is not defined
tarun.getFirstName() // print Tarun

// run in browser console
var myA = [2, 4, 5, 3]
myA
// it prints
//(4) [2, 4, 5, 3]
// 0: 2
// 1: 4
// 2: 5
// 3: 3
// length: 4// it is there that's why we can access length method with array to get to know sizeof array
// __proto__: Array(0) //expand this and you will find whole lot of the methods defining in proto object and that you will can use with accessing different properties of array
// also in array you can define in local context your custum property and then you can access it as when you want inside your code

// NOTE: Nearly all objects in javascript are instances of object; a typical object inherits properties (including methods) from Object.prototype
// Object.assign()

// a formal way to create objects but that is not recommended
// Object.create()

var Uuser = {
  name: "",
  getUserName: function () {
    console.log(`User name is :${this.name}`)
  },
}

var sunny = Object.create(Uuser)
console.log(sunny) // print {} empty object but in browser it will show __proto__ and whatever is in __proto__ we can directly access them
sunny.getUserName() //empty
sunny.name = "Sunny"
sunny.getUserName() //empty

// we can directy pass object to ceates an obj that has the specified prototype  or that has null prototype
var sam = Object.create(Uuser, {
  name: { value: "sammy" },
  courseCount: { value: 3 },
})
sam.getUserName() // User name is :sammy

// Binding properties in the object in js
const Sameer = {
  firstName: "Sameer",
  lastName: "Kumar",
  role: "admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
      First Name : ${this.firstName}
      last Name : ${this.lastName}
      role Name : ${this.role}
      he is studying : ${this.courseCount} courses

       `)
  },
}

// almost everything in js is obj and there are certain behind the scene obj properties being atttached to almost anything and everything you do with simple obj  there are some properties atttached with it and methods defining inside the object are atttached with some other properties as well called __proto__ which we can directly access them obj_name.property() some properties are atttached with entire obj and some are attached with methods of obj only

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
}

// consider a case here where getInfo method is define for Sameer only and we are going to see borrowing of methods , dj borrows a getInfo method  from Sameer lets see

// Borrowing method in JS
// bind the objects
// bind method

//  idea is if "this" keyword in Sameer object points to dj rather than pointing  to its parent object Sameer then all the getInfo method works for dj finely

var djInfo = Sameer.getInfo.bind(dj) // storing reference into djInfo
djInfo() // executing djInfo
//Sameer.getInfo.bind(dj)() // directly executing getInfo method for dj object

// remember bind always gives you a reference back and you have to run that reference while call directly run borrowing method

Sameer.getInfo.call(dj)

// Accessing Object Properties with Variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
}

// Only change code below this line

var playerNumber = 16
var player = testObj[playerNumber] // 16
console.log(player) // Montana
// delete a property from obj
// Setup
var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
}

// Only change code below this line
delete myDog.tails

// Using obj for lookups
// Setup
function phoneticLookup(val) {
  var result = ""

  // Setup

  // switch(val) {
  //   case "alpha":
  //     result = "Adams";
  //     break;
  //   case "bravo":
  //     result = "Boston";
  //     break;
  //   case "charlie":
  //     result = "Chicago";
  //     break;
  //   case "delta":
  //     result = "Denver";
  //     break;
  //   case "echo":
  //     result = "Easy";
  //     break;
  //   case "foxtrot":
  //     result = "Frank";
  // }

  // above commented code converted to
  var lookups = {
    alpha: "Adams",

    bravo: "Boston",

    charlie: "Chicago",

    delta: "Denver",

    echo: "Easy",

    foxtrot: "Frank",
  }
  result = lookups[val]
  // Only change code above this line
  return result
}

console.log(phoneticLookup("charlie"))
//  just read whole properties attached with objects from mdn docs
function checkObj(obj, checkProp) {
  // Only change code below this line

  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
  } else {
    return "Not Found"
  }
  // Only change code above this line
}
checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift")
// Generate random whole number within a range
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  // Only change code above this line
}
//Add Key-Value Pairs to JavaScript ObjectsPassed
const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
}
// by dot
tekkenCharacter.origin = "South Korea"
// string key to str value
tekkenCharacter["hair color"] = "dyed orange"
// or
const eyes = "eye color"
tekkenCharacter[eyes] = "brown"
