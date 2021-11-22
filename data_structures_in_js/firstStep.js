// collection of values is data structruce
// algo is the steps or processes that we put into place to manipulate these collection of values
// DS + ALGO --> PRORAMS
// Palindrome
function palindromeChecker(str1, str2) {
  let strx
  // Reverse a string
  strx = [...str1].reverse(str1).join("")
  return console.log(str2 == strx)
}
palindromeChecker("This is Awesome", "emosewA si sihT")
palindromeChecker("This is Awesome", "emosew si sihT")

function palindrome(str) {
  let strx
  strx = str.split(" ").reverse(str).join("")
  return console.log(str == strx)
}
palindrome("0_0 (: /- :) 0-0")

function palindrome1(str) {
  var modifiedStr = str.toLowerCase().replace(/[\W_]/g, "")
  var reverseStr = modifiedStr.split("").reverse().join("")
  return reverseStr === modifiedStr
}

console.log(palindrome1("0_0 (: /- :) 0-0"))

//We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
  let newArr = []
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i])
    }
  }
  // Only change code above this line
  return newArr
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
)
// function rot13(str) {
//   let arr= [/\w/]
//     return str;
//   }
