/*

***** - 1 - *****
* Function accept 2 parameters:str and sp 
* str is a sentence, sp is a char as separator
* It returns words, divided into characters using separator sp

*/
function splitAndMerge(string, separator) {
  return string.split(" ").map((item) => item.split("").join(separator)).join(" ");
}

/*

***** - 2 - *****
* Function accept 1 parameter: hash
* It returns hash converted into an array

*/
function convert(hash) {
  return Object.entries(hash);
}

/*

***** - 3 - *****
* Function accept 1 parameter: string with words separated by dash/underscores
* It returns converted dash/underscore delimited words into camel casing

*/
function toCamelCase(words) {
  let wordsArray = words.split("-").join("_").split("_");
  wordsArray = [wordsArray[0]].concat(wordsArray.slice(1).map((item) => item[0].toUpperCase() + item.slice(1)));
  return wordsArray.join("");
}

/*

***** - 4 - *****
* Function accept 1 parameter: sentence(string)
* It returns sentence with reversed words

*/
function wordReverse(string) {
  return string.split(" ").map( (item) => item.split("").reverse().join("")).join(" ");
}

/*

***** - 5 - *****
* Function accept 1 parameter: a string that includes alphanumeric characters ('3a4B2d')
* It returns the expansion of that string: The numeric values represent the occurance of each letter following that numeric value

*/
function stringExpansion(string) {
  let currentNumber = 1;
  let result = "";
  for (const char of string) {
    if (!isNaN(Number(char))) {
      currentNumber = Number(char);
    } else {
      result += char.repeat(currentNumber);
      currentNumber = 1;
    }
  }
  return result;
}

/*

***** - 6.1 - *****
* Function accept the list of arguments(numbers)
* It returns the largest number

*/
function largest(...args) {
  return Math.max.apply(null, args);
}

/*

***** - 6.2 - *****
* Function accept the list of arguments(numbers)
* It returns the smallest number

*/
function smallest(...args) {
  return Math.min.apply(null, args);
}

/*

***** - 7 - *****
* Function accept an array of numbers
* It returns array transformed to array of functions that return a value from a base array

*/
function transform(baseArray) {
  return baseArray.map((item) => () => item);
}

/*

***** - 8 - *****
* Function accept an arbitrary number of digit arguments
* It returns compound value of arguments

*/
function sum(...args) {
  return args.length === 1 ? args[0] : args[0] + sum.apply(this, args.slice(1));
}

/*

***** - 9 - *****
* Function accept a number
* It returns values one by one from the passed number till zero with one second delay

*/
function countDown(number) {
  let currentNumber = number;
  let timer = setInterval(() => {
    console.log(currentNumber);
    if (currentNumber == 0) {
      clearInterval(timer);
    };
    currentNumber--;
  }, 1000);
}
