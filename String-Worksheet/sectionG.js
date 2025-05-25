// 1. Count vowels in a given string using includes()
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) 
  {
    if (vowels.includes(char)) 
    {
      count++;
    }
  }
return count;
}
console.log(countVowels("AlphaIntern")); 
// Output: 4
// 2. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Alpha")); 
// Output: "ahplA"
// 3. Check whether a given string is a palindrome or not
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam")); 
// Output: true
console.log(isPalindrome("alpha")); 
// Output: false
// 4. Capitalize the first letter of each word in a sentence
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(capitalizeWords("alpha intern web dev"));  
// Output: "Alpha Intern Web Dev"
// 5. Count the number of times "Alpha" appears using replaceAll() and length
function countAlphaOccurrences(text) {
  let withoutAlpha = text.replaceAll("Alpha", "");
  return (text.length - withoutAlpha.length) / "Alpha".length;
}
console.log(countAlphaOccurrences("Alpha is part of AlphaIntern and AlphaDev"));  
// Output: 3