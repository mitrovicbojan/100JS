"use strict";
/*

Intermediate Challenges (26-60)


Convert a string to title case.
Check if two strings are anagrams.
Find the second largest number in an array.
Find the second smallest number in an array.
Count occurrences of a specific element in an array.
Remove falsy values from an array.
Flatten a nested array.
Merge two sorted arrays.
Find the intersection of two arrays.
Find the union of two arrays.
Find the difference between two arrays.
Implement a basic stack data structure.
Implement a basic queue data structure.
Implement a circular queue.
Create a function that returns a promise.
Use setTimeout to delay a function execution.
Use setInterval to log numbers every second.
Implement a debounce function.
Implement a throttle function.
Convert a string to kebab-case.
Convert a string to snake_case.
Convert a string to camelCase.
Validate an email address using regex.
Validate a phone number format.
Shuffle an array randomly.
Find the missing number in an array of 1 to n.
Find duplicate elements in an array.
Generate a random hexadecimal color code.
Implement a deep copy function for objects.
*/

console.log("-----------Intermediate Challenges--------");

// #1 Find the factorial of a number using a loop.

function factorialLoop(num) {
  if (num < 0) return console.log(`No factorial for negative numbers.`);

  let factorialNum = 1;
  for (let i = 2; i <= num; i++) {
    factorialNum *= i;
  }
  return console.log(`Factorial of ${num} is ${factorialNum}`);
}

factorialLoop(5);

// #2 Find the factorial of a number using recursion.

function factorialRecursion(num) {
  if (num < 0) return undefined;

  if (num === 0 || num === 1) return 1;
  return num * factorialRecursion(num - 1);
}

console.log(factorialRecursion(5));

// #3 Find the nth Fibonacci number.

function fibonacciNum(num) {
  if (num <= 1) return num;
  let a = 0;
  let b = 1;

  for (let i = 2; i <= num; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(fibonacciNum(12));

// #4 Find the sum of digits in a number.

function sumDigits(num) {
  const myNums = num.toString().split("");

  let digitSum = 0;

  for (let i = 0; i < myNums.length; i++) {
    digitSum = digitSum + Number(myNums[i]);
  }

  return console.log(`Sum of digits in number ${num} is ${digitSum}`);
}

sumDigits(15);

// #5 Count the number of vowels in a string.

function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  console.log(count);
}

countVowels("hello wOrld");

// #6 Capitalize the first letter of every word in a string.

const capStr = function (str) {
  let myNewArr = str.toLowerCase().split(" ");

  let newarr = [];

  myNewArr.forEach((word) => {
    newarr.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return console.log(newarr.join(" "));
};

capStr("HEllo world");
