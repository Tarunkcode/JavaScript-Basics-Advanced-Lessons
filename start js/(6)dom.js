// DOM : document object model
// selecting elements  on webpage: Two ways, 1.getElementsBy 2. querySelector
// after selecting ele we can create new more, modify or delete items super easy

// <Run in console(Browser)>
// let title = document.getElementsByTagName("h1")
// title // prints htmlCollection
// [0].innerText //access zeroth ele of htmlCollection and we have porperty called innerHTML and innerText for fetching what is inside h1 tag
// title // prints what is inside h1 tag
//
//  var titleTwo = document.getElementsByClassName("title")
//  title // prints htmlCollection
//  [0].innerText//access zeroth ele of htmlCollection and we have porperty called innerHTML and innerText for fetching what is inside h1 tag
//  title // prints what is inside h1 tag

// var number = document.querySelector(".counter")
// number // <ENTER> it gives entire h1 tag
// number.innerText // <ENTER> it gives 1000
// // to alter innerText
// number.innerText = "Tarun"
// number.innerText // <ENTER> it gives Tarun

// timeEvents in javascript :
// 1. SetTimeout(fn , miliSec)  -- once timeout is over it starts the defined fn
// 2. SetInterval(fn , miliSec) -- perform a defined fn after particular interval of time

// DOM manupulation
//projectI
var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")

// counter.innerHTML = 1001; // alter if we want

let count = 1

setInterval(() => {
  if (count < 1000) {
    count++
    counter.innerText = count
  }
}, 1)

setTimeout(() => {
  followers.innerText = "Followers on instagram"
}, 5000)
// // read other time events in javaScript

// projectII/part1-- grab me color of ele if i pass any elements to it.
// see the output in browser console
const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

// window obj has lots of property and one of them is getComputedStyle if you looking forward to grab some of the styling or the style property from any purticular elemnt it just require to pass on that particular element and once you pass it on you find a object then whatever the property you want to grab just access that with a dot operator
//how can we find out the background color of each of these element

console.log(window.getComputedStyle(red)) // it prints entire cssStyleDeclaration(ie, object) of given element, its a computed version style

console.log(window.getComputedStyle(red).background) // it prints rgb(228, 66, 54) none repeat scroll 0% 0% / auto padding-box border-box (return everything that browser is applied to the element)

//background-color: #FFF// CSS style
//backgroundColor: #FFF // JS Style

console.log(window.getComputedStyle(red).backgroundColor) // it prints rgb(228, 66, 54)

// rewrite accessing backgroundColor property of selected element in a method

const getBGColor = selectedElement => {
  return window.getComputedStyle(selectedElement).backgroundColor
}
console.log(getBGColor(pink)) // it prints rgb(187, 44, 217)

// Event listener
// projectII/part2
// TODO: https://developer.mozilla.org/en-US/docs/Web/Events

var orangeElementColor = getBGColor(orange)
var pinkColor = getBGColor(pink)

// after hunting an element we can add event listner to it
// selectedElement.addEventListener('what event are you listning for' , fn )

// style and getComputedStyle are two other things style is used when you want to implement some of the style , when you want to grab the style then the best way is getComputedStyle surely you can grab styles from this way as well but the most recommended way getComputedStyle bcz it gives the final result applied by browser and all things so depends on use case scenario you can grab the styling through the style as well

orange.addEventListener("mouseenter", () => {
  center.style.background = orangeElementColor
}) // hover on orange element

pink.addEventListener("click", () => {
  center.style.background = pinkColor
}) // click on pink element

// wrap this entire things in a method
const magicColorChanger = (selectedElement, color) => {
  return selectedElement.addEventListener("mouseenter", () => {
    center.style.background = color
  })
}

magicColorChanger(red, getBGColor(red))
