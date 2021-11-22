// let reserve some memory first (reserved keywords) : var, let, const

console.log("hello")
// alert('shitty website')

// variables DataTypes
let b = "smoothie" // string type
console.log(b)
console.log(typeof b) // print string

var someNo = 13 // int type
console.log(someNo)
// we can manupulate element from js file
//document.getElementById("someText").innerHTML = "hello world"

//var age = prompt('what is your age?')
//document.getElementById('someText').innerHTML = age;

var isLoggedIn = true // bool type
if (isLoggedIn) {
  console.log("Wecome")
}
let paymentMode
console.log(paymentMode) // undefined
paymentMode = "creditCard"
console.log(paymentMode) // now it print creditCard

// TODO:  USER SIGNUP APPLICATION
const uniqueID = "abc123"
var fullName = "tarun kumar"
var email = "tarun@nomail.com"
var password = "123456"
var confirmPassword = "123456"
var courseCount = 0
var isLoggedinFromGoogle = false

// dumping given info in the console  by  interpolation
console.log(`
  with unique id : ${uniqueID}
  User is : ${fullName}
  and his email  is : ${email}
  uses passcode : ${password}
  no. of couses in which user is enrolled : ${courseCount}

  `)

// *********************************************************
// Numbers in js
// operators in js , operator precedence
// https://developer.mozilla.org/en-US/docs/Web/javaScript/Reference/Operators/Operator_Precedence
console.log(5 * 10)
console.log(10 / 5)
// add(+) , sub(-) , div(/), remainder(%)
var num1 = 10
var num2 = 12
num1 = ++num1 // num1 = 11
num1 = num1++ // no increament
console.log(num1)
num1++ // increment by 1
console.log(num1) // print 12
--num1
console.log(num1) //  11
console.log((num1 += 3)) //  14
//<, >, >=, <=
var answer = num1 > num2 // bool data type

console.log(answer) // true
console.log(typeof answer) // returns the datatye of answer variable

// TODO: print the unit place only after having no. from user
// var unitPlace = prompt(" enter input we will give you unit place only")
// console.log(unitPlace % 10)

// find the dicount percentage
//  discount = ((listing price - selling price) / listing price) * 100
// let selling price $199 and listing price = $799. find Discount %
var listingPrice = 799
var sellingPrice = 199
var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100
console.log(`
  Listing Price is :$ ${799}
  Selling Price is :$ ${199}
  Discount  Percentage would be : ${discountPercent} % off ;
   `)
discountPercent = Math.round(discountPercent)
console.log(discountPercent)

// **********************************************************
// functions

// create a fn
function fun() {
  alert("This is a function")
}

// call fn
// fun();

// TODO: create a function that says hello {user_name}

//  function greet (){
//    var name = prompt('mention your name here')
//    console.log('hello ' + name); // string concatenation
//    console.log('hello ' , name); // also use comma string concatenation
//  }
// greet();

// fn is block of code that is seperated out so that it reuse again and again as necessary

// Referencing a function without () and calling a function with () , after defining it when working with dom in JS

function namastey() {
  return "Greetings from india"
}
namastey() //calling fn nothing prints since till now we are not say it to print
var hello = namastey
console.log(hello) // nothing does
console.log(namastey()) // this also works fine

// function getUserRole(name , role){
var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} can access anything he wants `

    case "subAdmin":
      return `${name} can modify or delete courses `

    case "testPrep":
      return `${name} can check and make test papers `

    case "user":
      return `${name} can consume course content only `

    default:
      return `${name} is a trail user `
  }
}

getUserRole("Tarun", "admin") //  nothing prints sice we not say this to print
console.log(getUserRole("Tarun", "admin"))
console.log(getUserRole("Deepanshu", "testPrep"))
console.log(getUserRole("Priya", "user"))
console.log(getUserRole("AAshu", "freind"))

/* Some Exclusive JS features */

// how global context works in JS
sayHello() // It works  we call before defining a function
// there  is always a global context which works in background of jsEngine. all the functionality of code reside in global context diffrnt engines have global context with different names
function sayHello() {
  console.log("HELLO", "Tarun")
}
const myName = "Tarun"
if (myName === myName) {
  console.log("condition comes true") // it prints eventually
}

// TODO: run this in chrom console and see this works or not
// if (myName === window.myName) {
//   console.log("condition comes true") // it prints in console of chrome browser reason is in chrome browser global context refer with name window
// }

// CODE HOISTING --

// Exe context is composed of : 1)variable Object 2). scope Chain 3). this

// two rules for execution context:
// 1)fn declerations are scanned and made available (how ?): first global context scan all the code then execution context starts working whenever there is fn it takes it at some place and make it available for entire code.

// 2)var decleration are also scanned and made undefined

Tipper("80") // calling fn before defining

//now defining Tipper fn
function Tipper(a) {
  var bill = parseInt(a)
  console.log(bill + 5)
} //works fine 1st rule applied here for execution context

//bigTipper('200') // @ this moment var bigTipper is undefined bcz acc to 2nd rule of execution context .

var bigTipper = function (a) {
  var bill = parseInt(a)
  console.log(bill + 15)
}
bigTipper("200") // it prints 215

console.log(Name) // return undefined, 2nd rule of exe context
var Name = "Sammy" // if we scrap this loc then above line gives error

sayName() //  Therefore it should print "MR. T"

function sayName() {
  var Name = "MR. T"
  console.log(Name)
} //fn sayName is an another context it does not know/explore var Name defined outside this fn and know only about Name which  is defined "MR. T" inside sayName fn

console.log(Name) // print Sammy

// self executing anonymous function called iife
// functions with no name and no one gonna call that it will starts execution immediately after its decleration for e.g,
;(function () {
  console.log("noOne call me")
  console.log("because i am iife")
})()

//Scope Chain --
// any scope can ask for its above scope for anything i.e require for exe context not to be assked for scope on its deeper level  of a particular scope
// or we can say in our call stack only one exe context is communicate with its below exe context and global context
var credential = "password" // reside in global context

console.log(credential) // print Password
function getInside() {
  console.log(credential) // assk for global scope at line no. 210 and print Password
  var credential = "name"
  console.log(credential) // this time it has its own local credential value as it is printed names

  function getMasterAccess() {
    console.log(credential) // in this local scope any credential value is not defined so  it ask it for only its above scope and prints name if therealso in some case it is undefined then it goes to the global scope.
  }
}

// ***********************************************************

// Conditionals  in javascript
// tempreture App
var tempreture
// TODO: goto the google and  get the data tempreture

tempreture = 39

if (tempreture > 30) {
  console.log("its very hot day today")
}

{
  //this is emty block of code
}
// how to request web and get some info from it

if (tempreture > 39) {
  console.log("its moderate hot for here native population")
} else {
  console.log("There is extremely hot even for here native population")
} // else block gonna execute

// TODO: check user can make a course purchage or not
// To make a purchage user should logged in, there email should be verified , his cardInfo is correct and then only purchase can be successfull
isLoggedIn = true
var isEmailVerified = true
var cardInfo = false
let upiMOde = true
if (isLoggedIn) {
  console.log("You are logged in. plz wait untill we checked other details ")
  if (isEmailVerified) {
    console.log("your email is already verified")
    if (cardInfo) {
      console.log(` card info verified successfully
                 you are eligible for purchaging this course
                 now please wait we will redirect you to paymentGateways`)
    } else {
      console.log(
        "your card Info is not  verified however, you make payment by UPI mode"
      )
    }
  }
}

// or another optimized and efficient way to write above code by  using logical operarators

if ((isLoggedIn && isEmailVerified && cardInfo) || upiMOde) {
  console.log(` you requested for  payment by UPI mode,
            you are eligible for purchaging this course
            now please wait we will redirect you to paymentGateways`)
}

// Ternary Operators
// TODO: show user a sign out button if user is authenticated ,
// otherwise show him option to log in or sign up
var authenticated = true
authenticated
  ? console.log("signOut")
  : console.log("you please choose from signUp or logIn")

// switch in JS
/*
Admin-get full access
subAdmin - get access to create or  delete course
testPrep - get access to create or delete test
user - who have access to consume content
*/

// if you have mul things to checkout and based on that you have provide some privillage or messages then switch in case is one such  great way

var user = "testPrep"
switch (user) {
  case "Admin":
    console.log("you get full access")

    break
  case "subAdmin":
    console.log("get access to create or  delete course")

    break
  case "testPrep":
    console.log("get access to create or delete test")

    break
  case "user":
    console.log(" who have access to consume content ")

    break

  default:
    console.log("Trail User")
}

// coercion is something js assume  by its own something and try to evaluate expression or print results even evaluation there is not valid js prints results. e.g,
if (2 == "2") {
  console.log("condition evaluated is true")
  //if this print thenit means jsengine assume by its own there is both int type or string type
}
// to avoid coercion we use ===
if (2 === "2") {
  console.log("condition evaluated is true")
} else {
  console.log("=== opr works fine here")
}

// another e.g, for coercion
console.log(2 + "2") // print 22 for incorrect evaluation

// remember falsy value
// 1. undefined
// 2. null
// 3. NaN
// 4. 0
// 5. ''
// except this all values evaluated true in js
if ("") {
  console.log("condition evaluated true that's why this prints")
} else console.log("condition evaluated false that's why this prints")

if (2) {
  console.log("2 consider true value")
} else console.log("2 is false after evaluation")

// **********************************************************************
// Array -- collection of identical elements on a contiguous memory location
// Declare an Array
var countries = ["india", "china", "japan", "russia"]
//another way for declaring Array
var states = new Array("rajasthan", "mumbai", "chandighar", "delhi", "assam")

//Access elements from Array
console.log(states[0])
console.log(states[3])
console.log(states.length) // verymuch useful while iterating or looping over Array

//alter array
states[0] = "punjab"
console.log(states[0])
// states[1] = states.replace('MANIPUR');
console.log(states)

// in js an array can store values of  different datatype for this purpose an special datatye called objects are particularly requested

var user = ["Tarun", "tarun@nomail.com", 39, 42.6, true]
console.log(user) // it return user

user.pop() //dump last ele of Array
user.pop()
console.log(user) //["Tarun", "tarun@nomail.com", 39]

user.unshift("new value") // add new value at index 0 and all previous values do a shift of +1 index
console.log(user) //["new value" ,"Tarun", "tarun@nomail.com", 39]
console.log(user[0])

user.shift() //dump very first ele of array and then do a shift of -1 indeces
console.log(user) //["Tarun", "tarun@nomail.com", 39]

console.log(user.indexOf(3)) // search 3 over array and if it is found return its index else return -1
console.log(user.indexOf("Tarun"))

// convert string into Array
// 'Tarun' into ['T','a','r','u','n']
console.log(Array.from("Tarun"))

// callback and arrow fn intro --
// function isEven(element){
var isEven = element => {
  // if(element % 2 === 0){
  //   return true;
  // }
  // return false;

  return element % 2 === 0 // evaluted either true or false
}
console.log(isEven(2)) //true

var result = [2, 4, 6, 8, 10].every(isEven) // every is a call back fn
console.log(result) // false

// what every does? it will goes to the function and then check fn for every value of object or array and then if all the individual results are same then it return true else return false
// significance of callback  fn : we can iterate over array without having the knowledge of loops

// efficient way  to write callback functions
var solution = [2, 4, 5, 3, 1, 9].every(e => {
  return e % 2 === 0
})
console.log(solution) // false

// or we can also remove  return keyword if not using curly beaces so,

var ans = [2, 4, 6, 8, 7].every(e => e % 2 === 0)
console.log(ans) //false

// methods in array : fill ,filter ,splice ,slice

var testArray = [2, 4, 3, 21, 3, 5, 6, 7]
//in most of the programming starts range is inclusive and end range is exclusive
// object.fill( x , range) ;x is anything that you want to fill in object

console.log(testArray.fill("t", 2, 4)) // fill entire array if range is not mention

const myNum = [25, 32, 1, 4, 43, 56, 22, 46, 98]

const r = myNum.filter(e => e != 43) // pass out only filtered elements
console.log(r)

var User = ["tim", "kim", "pip", "sam", "tik", "tok"]
User.slice(2, 5)
console.log(User) // pip , sam , tik

// obj.splice(start ,delete_count , replacement string[])

const usb = ["look", "smile", "deep thinking", "speed", "writing"]
usb.splice(1, 2, 9, "hi")
console.log(usb) //look, 9 , hi , speed , writing

// objects / objMethods -- collection of key-value pairs

var uuser = {
  firstName: "Tarun",
  lastName: "Kumar",
  role: "Admin",
  loginCount: 30,
  facebookSignedIn: true,
}

// access
console.log(uuser.role)
console.log(uuser["lastName"]) // this is weird but for this case syntax key should be in double quotes with bracket

//Alter object values
uuser.loginCount = 44
console.log(uuser)
console.table(uuser) // o/p in tabular format

// how to define a method inside objects
// refer a var that is in same object by using this keyword , just  telling that pleasse not go byond current scope and i am referring to var i.e, out of current scope
//this keyword refer to your current scope
// this = current context and current reference of object

var usser = {
  firstName: "Tarun",
  lastName: "Kumar",
  role: "Admin",
  loginCount: 30,
  facebookSignedIn: true,
  courseList: [],

  buyCourse: function (courseName) {
    this.courseList.push(courseName)
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
  },
}

console.log(usser.getCourseCount())
usser.buyCourse("JavaScript course")
console.log(usser.getCourseCount())

usser.buyCourse("Angular course")
console.log(usser.getCourseCount())
