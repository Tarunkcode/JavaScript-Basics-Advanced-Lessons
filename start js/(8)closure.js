// Lexical Scoping e.g,
// function init() {
//   var firstName = "Tarun"
//   function sayFirstName() {
//     console.log(firstName);
//   }// upto this line firstName is in existence we can drill down from sayFirstName context to just below init() context and can find it up
//
//   sayFirstName()//another context mount up over init() and i.e, sayFirstName() when exe control reaches to this line prints Tarun
// }
// init() // calling fn on top of global exe context once it's over over init() context  go back and all the thing var firstName,function sayFirstName declared in init() context, this is because of lexical scoping

// console.log(firstName);// error firstName is never been declared

// when you hold entire fn as a var like below or even you declaring fn not in functional approach rather than as a var then things are different and then closure will come into the picture

// var nnnn = init();

// TODO:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function init() {
  var firstName = "Tarun"
  console.log("I am init")
  function sayFirstName() {
    console.log(firstName)
  }
  return sayFirstName // we return a reference of sayFirstName method rather to run it means there is sayFirstName method and you can run it whenever you want is statement impilies  that , now sayFirstName method doesn not puff off rather it halts and wait for its execution in future till then init context and above it sayFirstName context will not puff off and memory will not freed up
}
// init()// print "I am init"

var value = init() // untill when control is here it only prints "I am init" only and holds reference of sayFirstName method

// since value is memory location and it holds a reference of a method as well therefore value can execute

value() // this is closure for init function

// another e.g, for explainig Closures

function doAdd(x) {
  return function (y) {
    return x + y
  }
}
var add = doAdd(5) // execution of doAdd starts and it does nothing it return and stores reference of fn , doAdd never goes off untill when even a single reference is alive
console.log(add(4)) // prints 9

console.log(doAdd(10)(7)) // also we can
doAdd()()() // curring

// &&
