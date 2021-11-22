// Web Api's ,
// async / await,
// callbacks,
// microtask queue (job queue),
// task queue(callback queue),
// Promises,
// eventLoop

// Js is syncronous programming language, JS does not knows what is webApi and world wide web .it's a single threaded programming language means has one call stack on the other hand web browser or node.js allows to write asynchronous code so we can interact the things liv outside the world of js.

//  Async function are the functions that we execute later like setTimeOut(), promises or event loop or callbacks
// Callback Queue or Task Queue
setTimeout(() => {
  console.log("1", "is the loneliest number")
}, 0)
setTimeout(() => {
  console.log("2", "can be as bad as one")
}, 10)

// 2 this task is in Job Queue or microTask Queue so runs 2nd then going to execute callback queue
Promise.resolve("hi").then(data => console.log("2", data))
// 3
console.log("3", "is a crowd") // non async code so runs first and wait for its completion

// Promises
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff Worked")
  } else {
    reject("Failed")
  }
}) // this part return a promise{} , if we want to see what is returning value of promise we use .then()
// declare a promise but not defined yet
//promise.then(result => console.log(result)) // to run a promise
//  chain of .then() one's then()  returning vlaue automatically passed to its subsequent .then()
//run promise, to see or manipulate the value of what promise return we use .then()
// inside the .then() code runs synchronously
promise
  .then(result => result + "!")
  .then(result2 => result2 + "?")
  .then(result3 =>
    // throw Error
    console.log(result3 + "!")
  )
  .catch(() => console.log("error"))
// we use alot of promise statement in async programing when we don't know the value yet in the code
// it's protect our JS to block the exe of code to simulate the code like there is async running of code, we use promise so the task can perform in the background

const promise2 = new Promise((resolve, reject) => {
  // request for setTimeout Api
  setTimeout(resolve, 100, "hii")
})
const promise3 = new Promise((resolve, reject) => {
  // request for setTimeout Api
  setTimeout(resolve, 1000, "Coookie")
})
const promise4 = new Promise((resolve, reject) => {
  // request for setTimeout Api
  setTimeout(resolve, 3000, "hey! is it me you are looking for ?")
})
Promise.all([promise, promise2, promise3, promise4]).then(values => {
  console.log(values)
})

// real world e.g for promise
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  " https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
] //for Browser run
Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json())
  })
)
  .then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
  })
  .catch(error => console.log("error is" + error))

// Async Await
// What is fetch() ?
// fetch() is a Web APi that return Promise.
//fetch() // see in browser console

fetch("https://jsonplaceholder.typicode.com/user")
  .then(resp => resp.json())
  .then(console.log)
// how to turn the above fetching request in async await version
async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await resp.json()
  console.log(data)
}
fetchUsers()

// we have
urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
]
Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json())
  })
)
  .then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
  })
  .catch(error => console.log("error is" + error))

// lets convert it in  async await code
const getData = async function () {
  try {
    // destructuring in ES 6
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(resp => resp.json()))
    )
    console.log("users", users)
    console.log("posts", posts)
    console.log("albums", albums)
  } catch (err) {
    console.log("oops", err)
  }
}
getData() // for browser run

// forOf loop for defining a chain of promises
const getData2 = async function () {
  const arrayOfPromises = urls.map(url => fetch(url))
  for await (let request of arrayOfPromises) {
    const data = await request.json()
    console.log(data)
  }
}
getData2()

// JOB QUEUE AND CALLBACK QUEUE
setTimeout(() => console.log("Tarun"), 0) // Callback queue runs last
Promise.resolve("Dear").then(data => console.log(data)) // job queue runs 2nd
console.log("Hello") // non async code runs first

// PARALLEL / SEQUENCIAL / RACE ways/ order for exe of promises :
const promisify = (item, delay) =>
  new Promise(resolve => setTimeout(() => resolve(item, delay)))
const a = () => promisify("a", 100)
const b = () => promisify("b", 5000)
const c = () => promisify("c", 3000)

// Parallel execution of promise
// only an async function can return promise
async function parallel() {
  const promises = [a(), b(), c()]
  const [op1, op2, op3] = await Promise.all(promises)
  return ` parallel is done : ${op1}, ${op2}, ${op3} `
}
parallel().then(console.log)

// Race
async function race() {
  const promises = [a(), b(), c()]
  const [op1] = await Promise.race(promises)
  return `race is done : ${op1}`
}
race().then(console.log)

// Sequence promise
const sequence = async () => {
  const op2 = await b()
  const op1 = await a()
  const op3 = await c()
  return ` Sequence is done ${op1} ${op2} ${op3}`
}
sequence().then(console.log) // b,a, c

//  race in b/w seq parallel and race who is faster
// order is not imp here in async code
parallel().then(console.log)
sequence().then(console.log)
race().then(console.log)

// allSettled() (ES2020)

const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000))
Promise.all([promiseOne, promiseTwo]).then(console.log) // uncaught error and not work
Promise.all([promiseOne, promiseTwo])
  .then(console.log)
  .catch(e => console.log("something failed", e))
//using allSettled()
Promise.allSettled([promiseOne, promiseTwo]).then(console.log) // promiseOne gets resolve and other gets rejected as we want to make
