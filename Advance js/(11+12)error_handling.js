// Stop thinking error are mistakes in our code instead its a feature for us to improve our code and tell the user or programmer when something is wrong.

// native error constructor function
//  throw Error();
// create instances of error
// new Error('msg)

// throw keyword stops exe of current running script or function and control pass to another func or call stack.
// throw new Error();
// throw is used to generate exceptions and  errors

// Available properties withh error
const myError = new Error("oopsie")
myError.name
myError.message
myError.stack // stack trace
// stack trace defined where the error encounter

// JS built in constructor for errors
// new SyntaxError
// new Reference Error (if a var not defined)

// ERROR HANDLING
//  whenever an error hits in the call stack control goes all the way down to the call stack and ask everytime for a catch like "is there a catch ?", catch is for handle or manages the errors and if there is no catch in current running execution context, runtime handle the error and we have shown on console this error :
/*
Runtime catch: onerror()
Process on('uncaughtException')
*/
throw "Error2" // String type
throw 42 // Number type
throw true // Boolean type
throw Error
throw new Error() // will create an instance of an Error in JavaScript and stop the execution of your script.

function a() {
  const b = new Error("what?")
  return b
}

a().stack

let error = new Error(message)
let error2 = new SyntaxError(message)
let error3 = new ReferenceError(message)

// try catch to handle error that for synchronize code and catch never runs for async code in try block
// nested try- catch is possible
function fail() {
  try {
    console.log("this works")
    throw new Error("oopsie")
  } catch (e) {
    console.log("error", e)
  } finally {
    console.log("still good")
    return "returning from fail"
  }
  console.log("never going to get here") // not reachable
}
fail()
// How to handle async error
// async error handling
// to write  async code in js we have async await and Promises.
// it is a good pracctice to always have .catch() with the promises because native browsers never able to catch error and happened in your code if you not using a catch() and it will always return you promise and that is dangerous that our code with error has not been shown in the console

// node servers always give you warning to use catch with promises 'UndaledPromiseRejectionWarning'

Promise.resolve("asyncfail")
  .then(response => {
    console.log(response)
    throw new Error("#1 fail")
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error("error", err.message)
  })
  .then(response => {
    console.log("hi am I still needed?", response)
    return "done"
  })
  .catch(err => {
    console.error(err)
    return "failed"
  })
//  nested promises
Promise.resolve("asyncfail")
  .then(response => {
    Promise.resolve(),
      then(() => {
        throw new Error("#3 fail")
      }) // if we not use below .catch() it never return error, it will return promise{}
        .catch(console.log)
    return 5
  })
  .then(response => {
    // here response is 5 means reponse = what Promise return and we have logged 5 here
    console.log(response)
  })
  .then(response => {
    //  nothing is retuned by its previous .then() its just logged  what it recieves and here reponse is undefined and that's why it will initiate to run its subsequent .catch()
    console.error("error", err.message)
  })
  .catch(err => {
    console.log("final error")
  })(
  //  if we remove catch() of nested promise{} above, then it will lead to run last catch() of final error since if any error encounter anywhere inside the code, control will goes to drill down to execution context and find any catch() if defines and runs it and you can see this how dangerous is that because those catch() is run that is defined to handle error for differnt promise

  // error handling in async await
  // since async await although asynchronous makes our code look sync we can use try catch to catch errors or exceptions
  async function () {
    try {
      await Promise.resolve("oopsie #1")
      await Promise.reject("oopsie #2")
    } catch (err) {
      console.error(err)
    }
    console.log("This is still good!")
  }
)()(
  //exercise
  function () {
    try {
      throw new Error()
    } catch (err) {
      var err = 5
      var boo = 10
      console.log(err)
    }
    //Guess what the output is here:
    console.log(err) //ans. undefined
    console.log(boo)
  }
)()
//output on the console :
// 5
// undefined
// 10

// *******************************************************************************************************************

// extended errors
// Error constructor is an obj that we can extend from

class authenticationError extends Error {
  // inherit all the propertiess of Error and can add new ones and change  things
  constructor(message) {
    super(message)
    this.name = "ValidationError"
    this.message = message
  }
}
const a = new authenticationError("oopsie !")
console.log(a.name) // ValidationError
a instanceof authenticationError // true
class PermissionError extends Error {
  constructor(message) {
    super(message)
    this.name = "PermissionError"
    this.message = message
    this.favouriteSnack = "grapes"
  }
}
class DatabaseError extends Error {
  constructor(message) {
    super(message)
    this.name = "DatabaseError"
    this.message = message
  }
}

throw new PermissionError("A permission error")
