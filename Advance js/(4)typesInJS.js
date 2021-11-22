// primitive data types: its a data that only represent a single value
// e.g, - typeof
// 5 - Number
console.log(typeof Infinity) // - Number type
// 'to be not to be' - String
// true or false - Boolean
// undefined - 'undefined', absence of defination
console.log("k", typeof null) // absence of value, it is an  obj type
// Symbol(any_value) - 'symbol' ,new introduce in ES6

// non primitive data type: except obj in javascript all type are primitive
console.log(typeof {}) // - objects
console.log(typeof []) // prints object it means in javascript array is not a datatype it is of object type
console.log(typeof function () {}) //it prints function but that is technically wrong we will study it in future lets for now just take that functions are of object type in js
console.log(typeof Math) // obj type

// in obj we can able to add property into the obj from the global space can we do it same for function ,if function are of obj type then it make sense and it should work

function a() {
  return 5
}
a.greeting = "hi hey hello"
console.log(a.greeting) // it works so  we can conclude that function are object
// TODO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
console.log(true.toString()) // primitive type has some obj who can access them like an object access its property
var array = [1, 3, 45, 2]
// same we can declare above array[] as down below
var array = {
  0: 1,
  1: 3,
  2: 45,
  3: 2,
}
console.log(array)
//how to check something is contained in var is an array or obj in js since typeof [] is object
console.log(Array.isArray([1, 24, 4, 1])) // true for array
console.log(Array.isArray(array)) // false
//var Array: ArrayConstructor

// Pass by value versus Pass by reference
// primitive types are imitable means we can really change them in order to change them we need to completely remove the primitive type
var p = 5 // somewhere in memory var p is going to contained reference
var q = 10 // same thing and p and q are really dont know of each other
// primitive type are pass by value and objects are passed by reference
q = p // copy the primitive type value 5 , now q has a reference to the value primitive type 5 this is because of pass by value(copy the value)
q++
console.log(p) // print 5
console.log(q) // print 6

// in case of objects
let obj1 = { name: "Tarun", password: 123 }
let obj2 = obj1
obj2.password = "easypeasy" //here we try to change the password for obj2
console.log(obj1)
console.log(obj2)
// you saw the o/p , password has been changed for both the objects this is super weird and this because of pass by reference here we not copying the value instead we give or assigned the refrence or address of obj1 to the obj2 so all i did said to the obj2 is change the password at this memory location which is hold by obj2 and i.e, the location address of obj1 in memory

// since array is an object  type so we have to pass array as a reference is passed
// to prove array is an obj in pass by reference version
var r = [1, 32, 45, 6, 3]
var s = r
s.push(332)
console.log(r)
console.log(s)
// both arrays are updated with a new value i.e, 332
// what is the significance of doing that is we dont need to cpy paste the same code here and there and we also save memory space by providing the address to the new obj
// what if we really need to modify some part of object after passing a reference of another obj-> way of doing cloning an object and manipulation of cloning obj
// shallow cloning , cloning to the first layer of object

s = [].concat(r)
s.push(442)
console.log(r)
console.log(s) // this time only s updated with a new value 442

let obj = { a: "a", b: "b", c: "c" } // original object
let clone = Object.assign({}, obj) // first make a clone
obj.c = 5 // and then manipulate original object
console.log(obj) // here only original object; obj updated with a new value of c which is 5
console.log(clone) // clone is unaffected with manipulation of original obj

// another way of doing cloning an object
let clone2 = { ...obj }
console.log(clone2)

// deep cloning
// what if we have an object called X and inside that object there is an another object called x, so how to clone first an modify obj x in original or cloning object
let superObj = {
  a: "a",
  b: "b",
  c: {
    deep: "try an copy me",
  },
} // original object
let superClone = JSON.parse(JSON.stringify(superObj)) // turned obj into string type and then we can parse that string into an object
// console.log(superClone)
superClone.deep = "you are copied successfully into superClone"
console.log(superObj)
console.log(superClone) // only superClone updated inside 2nd layer object

// type coercion the language converting a string type to another type
console.log(1 == "1") // true
console.log(1 === "1") //false
console.log(-0 === +0) //true
console.log(Object.is(-0, +0)) //false
console.log(NaN === NaN) //false
console.log(Object.is(NaN, NaN)) // true
// TODO: https://dorey.github.io/JavaScript-Equality-Table/
// TODO: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// JS can be weird when it comes to type coercion. Try to guess what the output for each of the lines below are:

// false == ""
// false == []
// false == {}
// "" == 0
// "" == []
// "" == {}
// 0 == []
// 0 == {}
// 0 == null
// TODO: https://www.freecodecamp.org/news/why-use-static-types-in-javascript-part-1-8382da1e0adb/
// TODO: https://docs.oracle.com/cd/E57471_01/bigData.100/extensions_bdd/src/cext_transform_typing.html#:~:text=First%2C%20dynamically-typed%20languages%20perform,type%20checking%20at%20compile%20time.&text=If%20a%20script%20written%20in,the%20errors%20have%20been%20fixed.
