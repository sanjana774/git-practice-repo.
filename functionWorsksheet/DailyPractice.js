// 1. Write a function that takes person age as a number as input and determines, person are eligible or not for voting.
function isEligibleToVote(age) {
    if (age >= 18) {
        return "Eligible for voting";
    } else {
        return "Not eligible for voting";
    }
}
console.log(isEligibleToVote(20)); // Eligible
// console.log(isEligibleToVote(16)); // Not Eligible



// 2. Find Greater Number
function findGreater(num1, num2) {
    if (num1 > num2) {
        return num1 + " is greater";
    } else if (num2 > num1) {
        return num2 + " is greater";
    } else {
        return "Both are equal";
    }
}
console.log(findGreater(34, 15));
// console.log(findGreater(-234, -4));
// console.log(findGreater(0, 0));



// 3. Positive or Negative
function checkPositiveNegative(number) {
    if (number > 0) 
        return "Positive";
    else if (number < 0)
        return "Negative";
    else
        return "Zero";
}
console.log(checkPositiveNegative(-576));
// console.log(checkPositiveNegative(768));
// console.log(checkPositiveNegative(0));



// 4. Even or Odd
function isEvenOrOdd(num_ber) {
    if (num_ber % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEvenOrOdd(10));
// console.log(isEvenOrOdd(875));



// 5. Contains 'a' or 'A'
function containsAorA(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            return true;
        }
    }
    return false;
}
console.log(containsAorA("Apple"));  // true
// console.log(containsAorA("Hello"));  // false



// 6. Longer Than 5 Characters
function isLongerThanFive(str6) {
    if (str6.length > 5) {
        return true;
    } else {
        return false;
    }
}
console.log(isLongerThanFive("Hello"));     // false
console.log(isLongerThanFive("Goodbye"));   // true



// 7. Number Between 1 and 10
function isBetween1And10(number) {
    if (number >= 1 && number <= 10) {
        return true;
    } else {
        return false;
    }
}
console.log(isBetween1And10(5));   // true
console.log(isBetween1And10(15));  // false



// 8. Contains "hello"
function containsHello(str8) {
    for (let i = 0; i <= str8.length - 5; i++) {
        if (str8.slice(i, i + 5) === "hello") {
            return 1;
        }
    }
    return false;
}
console.log(containsHello("Say hello to him")); // true
// console.log(containsHello("Hi there"));         // false



// 9. Multiple of 3
function isMultipleOf3(number) {
    if (number % 3 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isMultipleOf3(9));   // true
console.log(isMultipleOf3(10));  // false



// 10. Multiply by 10 (using loop)
function multiplyBy10(number) {
    let result = 0;
    for (let i = 0; i < 10; i++) {
        result += number;
    }
    return result;
}
console.log(multiplyBy10(5));  // 50
