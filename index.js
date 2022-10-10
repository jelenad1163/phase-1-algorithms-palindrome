function reverse(word) {
  //const wordArray = word.split("")
  // const reversedWordArray = wordArray.reverse()
  // const reversedWord = reversedWordArray.join("")
  return word.split("").reverse().join("");
}


function isPalindrome(word) {
  const reversedWord = reverse(word)

  return word === reversedWord
}


/* 
  write function that has one argument, a string.
  function should return true if string is a palindrome.
  false if it is not.

  mom===mom//true
  abc === cba // false 

  reverse the input string
  if input is same as reversed input
    return true
  else
    return false 
*/

/*
  writing a for loop would work to check if each end matches
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
