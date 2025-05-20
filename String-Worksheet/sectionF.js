// Q1  Convert the sentence "I love coding" into an array of words
let sentence = "I love coding";
let wordsArray = sentence.split(" ");
console.log(wordsArray);
// output : ["I", "love", "coding"]


// Q2  Convert the string "Alpha" into an array of characters
let str = "Alpha";
let charArray = str.split("");
console.log(charArray);
// output : ["A", "l", "p", "h", "a"]


// Q3  Print the ASCII value of the character "A"
let char = "A";
let asciiValue = char.charCodeAt(0);
console.log(asciiValue);
//  output : 65


//  Q4  Join the array ["web", "dev"] into a single string 
// with a space in between
let arr = ["web", "dev"];
let joined = arr.join(" ");
console.log(joined); 
// output :  "web dev"


// Q5  Given the string "JavaScript is Awesome", perform several 
// transformations:
let text = "JavaScript is Awesome";

// a. All lowercase
console.log(text.toLowerCase());  
// O/P : "javascript is awesome"

// b. All uppercase
console.log(text.toUpperCase());  
// O/P : "JAVASCRIPT IS AWESOME"

// c. Replace "Awesome" with "Powerful"
console.log(text.replace("Awesome", "Powerful"));  
// O/P : "JavaScript is Powerful"

// d. Check if the string starts with "Java"
console.log(text.startsWith("Java"));  
// O/P : true


