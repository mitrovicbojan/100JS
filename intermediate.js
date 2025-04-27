"use strict";
/*

Intermediate Challenges (26-60)



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

// 7# Convert a string to title case.

// 8# Check if two strings are anagrams.

function checkAnagrams(str1, str2) {
  if (str1.length != str2.length) {
    return console.log("not anagrams");
  }
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return console.log("2 strings are not anagrams");
    } else {
      return console.log("2 strings are anagrams");
    }
  }
}

checkAnagrams("ham", "mah");

// 9# Find the second largest number in an array.

const arrNums = [5, 7, 8, 33, 35, 87, 12, 1, 9, 15, 73, 45];

const scndLgNum = arrNums.sort().reverse()[1];

console.log(`The second largest number in an array is ${scndLgNum}`);

// 10# Find the second smallest number in an array.

const scndSmNum = arrNums.sort()[1];

console.log(`The second smallest number in an array is ${scndSmNum}`);

// Using function

function numChecking(arr) {
  //2nd smallest num
  const smNum = arr.sort()[1];

  //2nd largest num
  const lgNum = arr.sort().reverse()[1];

  return console.log(
    `The second smallest number in array is ${smNum} and the second largest is ${lgNum}`
  );
}

numChecking([5, 7, 8, 33, 35, 87, 12, 1, 9, 15, 73, 45]);

// 11# Count occurrences of a specific element in an array.

function occurCount(arr, el) {
  let count = 0;
  arr.forEach((item) => {
    item === el ? count++ : count;
  });

  return console.log(`${el} occures in an array ${count} time(s)`);
}

occurCount([1, 2, 3, 4, 1, 1], 5);
occurCount(["to", "step", "done", "javascript", "array", "to"], "to");

// 12# Remove falsy values from an array.

function removeFalsy(arr) {
  const newArr = arr.filter(Boolean);
  return console.log(newArr);
}

removeFalsy([
  1,
  1,
  5,
  0,
  true,
  NaN,
  -0,
  "",
  false,
  null,
  undefined,
  BigInt(0),
  "end",
]);

// #13 Flatten a nested array.

const flatArr = (arr) => {
  return console.log(arr.flat(Infinity));
};

flatArr([[3, 2, 1], [4, 6, 5, [3, 4, 5, 10]], [], [9, 7, 8]]);

// 14# Merge two sorted arrays.

const mergeArr = (arr1, arr2) => {
  return console.log(arr1.concat(arr2).sort());
};

mergeArr([1, 2, 3], [1, 2, 3]);

// 15# Find the intersection of two arrays.

function findInter(arr1, arr2) {
  return console.log(arr1.filter((el) => arr2.includes(el)));
}

findInter([1, 2, 3], [2, 44, 3]);

// 16# Find the union of two arrays.

function findUnion(arr1, arr2) {
  const newSet = new Set();

  const unionArr = [];

  for (let num of arr1) {
    newSet.add(num);
  }
  for (let num of arr2) {
    newSet.add(num);
  }

  for (let num of newSet) {
    unionArr.push(num);
  }

  return console.log(unionArr);
}

findUnion([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6], [4, 5, 6, 7, 8, 9, 6, 4, 5]);
