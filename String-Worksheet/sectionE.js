// Q1   Replace the word "Intern" with "Mentor" in "AlphaIntern"
let str = "AlphaIntern";
let result = str.replace("Intern", "Mentor");
console.log(result); 
// Output: AlphaMentor


// Q2   Replace all occurrences of "a" with "z" in "banana"
let fruit = "banana";
let newResult = fruit.replaceAll("a", "z");
console.log(newResult); 
// Output: bznznz


// Q3   Remove all extra spaces from " JavaScript is awesome " 
//      and print the result
let text = " JavaScript is awesome ";
let trimmed = text.trim();
console.log(trimmed); 
// Output: JavaScript is awesome


// Q4   Extract "Intern" from "AlphaIntern"
let str2 = "AlphaIntern";
let extracted = str2.slice(5);  // from index 5 to end
console.log(extracted); 
// Output: Intern


// Q5   Extract "Alpha" from "AlphaIntern"
let str3 = "AlphaIntern";
let extracted2 = str.slice(0, 5);  // from index 0 to 4
console.log(extracted2); 
// Output: Alpha