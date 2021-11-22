// Find the Longest Word in a String
// Solution 1 (Click to Show/Hide)
function findLongestWordLength(str) {
  let words = str.split(" ")
  let maxLength = 0

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length
    }
  }

  return maxLength
}

// Solution 2 (Click to Show/Hide)
Using.reduce()

function findLongestWordLength(s) {
  return s.split(" ").reduce(function (longest, word) {
    return Math.max(longest, word.length)
  }, 0)
}

// Solution 3 (Click to Show/Hide)
// Using.map()

function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length))
}

// Solution 4 (Click to Show/Hide)
function findLongestWordLength(str) {
  // split the string into individual words
  const words = str.split(" ")

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length
  }

  // if words has multiple elements, remove the first element
  // and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  )
}

findLongestWordLength("The quick brown fox jumped over the lazy dog")
