//project01
var para = document.querySelector(".count")
// var followers = window.document.querySelector(".followers")
let count = 0,
  clear

document.querySelector(".start").addEventListener("click", () => {
  clear = setInterval(ValueCount, 1)
})

document.querySelector(".stop").addEventListener("click", () => {
  clearInterval(clear)
})
document.querySelector(".reset").addEventListener("click", () => {
  count = 0
  para.innerText = count
})

function ValueCount() {
  count++
  para.innerText = count
}
