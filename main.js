"use strict";
/*
Beginner Challenges (1-25)

12. Replace all occurrences of a given word in a string.
13. Concatenate two arrays.
14. Find the largest number in an array.
15. Find the smallest number in an array.
16. Remove duplicates from an array.
17. Sort an array in ascending order.
18. Sort an array in descending order.
19. Find the sum of all numbers in an array.
20. Find the average of numbers in an array.
21. Generate a random number between 1 and 100.
22. Check if a year is a leap year.
23. Convert Fahrenheit to Celsius.
24. Convert Celsius to Fahrenheit.
25. Check if a given character is a vowel.

*/

// #1 Print "Hello, World!" to the console.

console.log("Hello, World!");

// #2 Declare a variable and assign it a string.

let myStr = "hello";

// #3 Declare a constant and assign it a number.

const myNum = 6;

// 4# Create a function that returns the sum of two numbers.

function sumOfTwo(a, b) {
  return a + b;
}
console.log(sumOfTwo(2, 5));

// #5 Write a function to check if a number is even or odd.

function checkNums(num) {
  return num % 2 === 0
    ? console.log(`Number ${num} is even number.`)
    : console.log(`Number ${num} is odd number.`);
}
checkNums(3);

// #6 Write a function to find the maximum of two numbers.

function greaterNum(a, b) {
  return a > b
    ? `Number ${a} is greater than ${b}.`
    : `Number ${b} is greater than ${a}.`;
}

console.log(greaterNum(8, 9));

// #7 Convert a number to a string.

const a = 7;
const b = a.toString();
console.log(typeof a);
console.log(typeof b);

// #8 Convert a string to a number.

const convertStr = "11";
const strNum = Number(convertStr);

console.log(strNum);

// #9 Reverse a string without using .reverse().

const revStr = "Hello";
let reversedStr = "";

for (let i = revStr.length - 1; i >= 0; i--) {
  reversedStr += revStr[i];
}

console.log(reversedStr);

// #10 Write a function to check if a string is a palindrome.

function checkPalindrome(word) {
  const reversedWord = word.split("").reverse().join("");

  reversedWord === word
    ? console.log(`${word} is a palidndrome`)
    : console.log(`${word} is not a palidndrome`);
}
checkPalindrome("radar");

// #11 Find the length of a given string.

function findLen(str) {
  return console.log(`Length of ${str} is ${str.length}`);
}

findLen("hello");
