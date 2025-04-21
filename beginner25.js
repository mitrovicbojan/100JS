"use strict";
/*
Beginner Challenges (1-25)
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

// #12 Replace all occurrences of a given word in a string.

function replaceWord(string, originalWord, newWord) {
  return console.log(string.toLowerCase().replaceAll(originalWord, newWord));
}

replaceWord("Roses are red, apples are Red.", "red", "green");

// #13 Concatenate two arrays.

const firstArr = [1, 2, 3, 4, 5];
const secondArr = [6, 7, 8, 9, 10];

const concatArr = [...firstArr, ...secondArr];
console.log(concatArr);

// #14 Find the largest number in an array.

const numArr = [34, 12, 56, 23, 45, 67, 29];

const maxNum = Math.max(...numArr);

console.log(`The largest number in an array is ${maxNum}.`);

// #15 Find the smallest number in an array.

const smlNum = Math.min(...numArr);

console.log(`The smallest number in an array is ${smlNum}.`);

// #16 Remove duplicates from an array.

const dplArr = [34, 12, 56, 23, 34, 29, 45, 67, 29];

const uniqArr = [...new Set(dplArr)];

console.log(uniqArr);

// #17 Sort an array in ascending order.

console.log(
  numArr.sort(function (a, b) {
    return a - b;
  })
);

// #18 Sort an array in descending order.

console.log(
  numArr.sort(function (a, b) {
    return b - a;
  })
);

// #19 Find the sum of all numbers in an array.
let sum = 0;
numArr.forEach((num) => {
  if (typeof num === "number" && !isNaN(num)) {
    sum += num;
  }
});
console.log(sum);

// #20 Find the average of numbers in an array.

const numsArr = [34, 12, 56, 23, 34, 29, 45, 67, 29];

let sumArr = 0;

numsArr.forEach((num) => (sumArr += num));

const avgArr = sumArr / numsArr.length;

console.log(avgArr.toFixed(2));

// #21 Generate a random number between 1 and 100.

function randomNum(startNum, endNum) {
  return Math.floor(Math.random() * (endNum - startNum + 1)) + startNum;
}

console.log(randomNum(1, 100));

// #22 Check if a year is a leap year.

function checkLeapYear(year = 1) {
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    console.log(`Year ${year} is a leap year`);
  } else {
    console.log(`Year ${year} is not a leap year`);
  }
}

checkLeapYear();

// #23 Convert Fahrenheit to Celsius.

function convertFahrenheit(temp) {
  const celsiusTemp = ((temp - 32) * 5) / 9;
  return console.log(
    `${temp} Fahrenheit is equal to ${celsiusTemp.toFixed(2)} Celsius.`
  );
}

convertFahrenheit(194);

// #24 Convert Celsius to Fahrenheit.

function convertCelsius(temp) {
  const fahrenheitTemp = temp * (9 / 5) + 32;
  return console.log(
    `${temp} Celsius  is equal to ${fahrenheitTemp.toFixed(2)} Fahrenheit.`
  );
}
convertCelsius(90);

// #25 Check if a given character is a vowel.

const vowels = ["a", "e", "i", "o", "u"];

function checkVowel(char) {
  vowels.includes(char.toLowerCase())
    ? console.log(`${char} is a vowel.`)
    : console.log(`${char} is not a vowel.`);
}
checkVowel("A");
