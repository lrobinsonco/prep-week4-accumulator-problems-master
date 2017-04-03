/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.

*/

function test() {
 var string ="This Works!";
 return string;
}

console.log(test())

/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/
function sum(array) {
  var result = 0
   for (var i = 0; i < array.length; i++) {
     result += array[i]
   }
return result;
}
console.log(sum([3,4,5]))







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/
function doubleNumbers(array){
  var results = [];
  for (var i = 0; i < array.length; i++) {
    results[i] = array[i]*2  }
    return results
}
console.log(doubleNumbers([3,4,5]))

// function doubleNumbers(arr){
//   let newArr = arr.map(el => el+el)
//   return newArr
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/
function multiplyNumbers(array, number) {
  var final = []
  for (var i = 0; i < array.length; i++) {
    final[i] = array[i] * number  }
    return final;
}
console.log(multiplyNumbers([2,3,4], 10))








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/
function doubleLetters(string){
  string = string.split('')
  var newArray = string.map(el => el+el)
  return newArray.join('')
}
console.log(doubleLetters('abcdef'))








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave(array1,array2){
  var result = []
  for (var i = 0; i < array1.length; i++) {
    result.push(array1[i])
    result.push(array2[i])
  }
  return result
}
console.log(interleave([]))
// function interleave (arr1, arr2) {
//   let newArr = []
//   for (let i = 0; i<arr1.length; i++){
//     newArr.push(arr1[i])
//     newArr.push(arr2[i])
//   }
//   return newArr
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(num, name) {
  let result = []
  for (let i = 0; i < num; i++) {
    result.push(name)
  }
  return result;
}
console.log(createRange(3, 'n'));
// function multiplyNumbers(array, n) {
//  let final = []
//  for (var i = 0; i < array.length; i++) {
//    final[i] = array[i] *n  }
//    return final;
// }

// function createRange(num, val){
//   let output = Array(num)
//   for (let i=0; i<num; i++){
//     output[i] = val
//   }
//   return output
// }


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/
function flipArray(array) {
  var object = new Object();
  for (var i = 0; i < array.length; i++){
    object[array[i]] = i;
  };
  return object;
};
var testarray = ["punch", "kick", "block"]

// function flipArray (array){
//   var object = new Object();
//   for (var i = 0; i < array.length; i++){
//     object[array[i]] = i;
//   };
//   return object;
// };
// var testarray = ["quick", "brown", "fox"];





/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/
function arraysToObject(array) {
  var obj = {}
  for (i=0; i<array.length; i++){
    obj[array[i][0]]= array[i][1]
  }
  return obj
}
// function arraysToObject(arr){
//   let obj = {}
//   for (i=0; i<arr.length; i++){
//     obj[arr[i][0]]= arr[i][1]
//   }
//   return obj
// }







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/
function reverseString(string) {
  var newString = [];
  for (var i=string.length-1; i>=0; i--){
    newString.push(string.charAt(i))
  }
  return newString.join('')
}

// function reverseString(str){
//   let newStr = [];
//   for (let i=str.length-1; i>=0; i--){
//     newStr.push(str.charAt(i))
//   }
//   return newStr.join('');
// }









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/
function repeats(string) {
  var firstHalf = string.slice(0, string.length/2)
  var secondHalf = string.slice(string.length/2, string.length)
  if(string.length % 2 === 0 && firstHalf === secondHalf){
    return true
  } else{
    return false
  }
}
// function repeats (str){
//   let firstHalf = str.slice(0, str.length/2)
//   let secondHalf = str.slice(str.length/2, str.length)
//   if (str.length % 2 === 0 && firstHalf === secondHalf){
//       return true
//   } else {
//     return false
//   }
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/
function everyOther (string) {
  var newString = []
  var attempt = false
  for (var i= 0; i<string.length; i++){
    attempt = !attempt
    if (attempt === true)
    newString.push(string[i])
  }
  return newString.join('')
}

// function everyOther (str){
//   let test = false
//   let newStr = []
//   for (let i=0; i<str.length; i++){
//     test = !test
//     if (test === true)
//     newStr.push(str[i])
//   }
//   return newStr.join('')
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/
function allEqual(string) {
  var test = true
  var array = string.split('')
  for(var i=1; i<array.length; i++){
    if (array[i] !== array[i-1]){
      test = false
    }
  }
  return test
}

// function allEqual(str){
//   let test = true
//   let arr = str.split('')
//   for (let i=1; i<arr.length; i++){
//     if (arr[i]!==arr[i-1]){
//       test = false
//     }
//   }
//   return test
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/
function sumLetters(string) {
  var output
  var array = string.split('')
  if (string === '') {
    output = 0
  } else{
    output = array.reduce( (a,b) => (Number(a)+Number(b)))
  }
  return output
}
console.log(sumLetters(['hello']))
// function sumLetters(str){
//   let output
//   let arr = str.split('')
//   if (str === '') {
//     output = 0
//   } else {
//     output = arr.reduce( (a,b) => (Number(a)+Number(b)))
//   }
//   return output
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/
function countVowels(string) {
  function vowels(value) {
    if (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u') {
      return value
    }
  }
  var array = string.split('')
  var vowelArray = array.filter(vowels)
  return vowelArray.length
}
// function countVowels(str) {
//   function vowels(value) {
//     if (value === 'a' || value === 'e' || value === 'i' || value === 'o' || value === 'u' ) {
//       return value
//     }
//   }
//   let arr = str.split('')
//   let vowelArr = arr.filter(vowels)
//   return vowelArr.length
// }








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/
function split(string) {
  var array = []
  for(var i=0; i<string.length; i++){
    array.push(string.charAt(i))
  }
  return array
}
// function split(str){
//   let arr = []
//   for (let i=0; i<str.length; i++){
//     arr.push(str.charAt(i))
//   }
//   return arr
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/
function getCodePoints(string) {
  var array = []
  for(var i= 0; i<string.length; i++){
    array.push(string.codePointAt(i))
  }
  return array
}
// function getCodePoints (str) {
//   let arr = []
//   for (let i=0; i<str.length; i++){
//     arr.push(str.codePointAt(i))
//   }
//   return arr
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/
function letterMap(string) {
  var object = {}
  for (var i = 0; i<string.length; i++){
    object[string.charAt(i)] = i
  }
  return object
}
// function letterMap(str) {
//   let obj = {}
//   for (let i=0; i<str.length; i++){
//     obj[str.charAt(i)] = i
//   }
//   return obj
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/
function letterCount(string) {
  var object = {}
  for (var i = 0; i<string.length; i++){
    if (object[string[i]]){
      object[string[i]]++
    } else {
      object[string[i]]=1
    }
  }
  return object
}
// function letterCount(str) {
//   let obj = {}
//   for (let i=0; i<str.length; i++){
//     if (obj[str.charAt(i)]){
//       obj[str.charAt(i)]++
//     } else {
//       obj[str.charAt(i)] = 1
//     }
//   }
//   return obj
// }







/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/
function threeOdds(x, y) {
  var count = 0
  for (var i = x+1; i < y; i++) {
    if (i%2 !== 0){
      count++
    }
  }
  if (count>2){
    return true
  } else{
    return false
  }
}

// function threeOdds (x, y) {
//   let count = 0
//   for (i=x+1; i<y; i++){
//     if (i%2 !== 0){
//       count++
//     }
//   }
//   if (count>2){
//     return true
//   } else {
//     return false
//   }
// }








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/
function leftPad(string, length, fillChar) {
  var fillString = ''
  if (string.length < length){
    for (var i =0; i<(length-string.length); i++){
      fillString+=fillChar
    }
    return fillString+string
  } else{
    return string
  }
}
// function leftPad(str, len, fill){
//   let fillStr = ''
//   if (str.length < len){
//     for (let i=0; i<(len-str.length); i++){
//       fillStr+=fill
//     }
//     return fillStr+str
//   } else {
//     return str
//   }
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/
function createString(length, character) {
  var string = ''
  for(var i =1; i<=length; i++){
    string+=character
  }
  return string
}
console.log(createString(3, 'n'))
// function createString(len, char){
//   let str =''
//   for (i=1; i<=len; i++){
//     str+=char
//   }
//   return str
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/
function factorial(number) {
  var output= 1
  for (var i=number; i>0; i--){
    output *= i
  }
  return output
}
console.log(factorial(6))

// function factorial(num){
//   let output = 1
//   for (i=num; i>0; i--){
//     output *= i
//   }
//   return output
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/
function arrayOfNumbers(number) {
  var array = []
  for (var i=1; i<=number; i++){
    array.push(i)
  }
  return array
}
console.log(arrayOfNumbers(3))

// function arrayOfNumbers(num){
//   let arr = []
//   for (i=1; i<=num; i++){
//     arr.push(i)
//   }
//   return arr
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/
function evenOdd(startNumber, endNumber) {
  var object= {}
  if (startNumber === 0 && endNumber === 0){
    return object
  }
  for(var i=startNumber; i<=endNumber; i++){
    var test = "odd"
    if (i%2 ===0){
      test = "even"
    }
    object[i.toString()] = test
  }
  return object
}
console.log(evenOdd(1, 5))

// function evenOdd(start, end) {
//   let obj = {}
//   if (start === 0 && end === 0){
//     return obj
//   }
//   for (i=start; i<=end; i++){
//     let test = 'odd'
//     if (i%2 ===0) {
//       test = 'even'
//     }
//     obj[i.toString()] = test
//   }
//   return obj
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/
function growingKeys(number, string) {
  var object = {};
  var key = ''
  if (number === 0){
    return object
  }
  for (i=0; i<number; i++){
    key+=string
    object[key]= true
  }
  return object
}
console.log(growingKeys(3, 'n'))

// function growingKeys(num, str) {
//   let obj = {};
//   let key = ''
//   if (num === 0) {
//     return obj
//   }
//   for (i=0; i<num; i++){
//     key+=str
//     obj[key] = true
//   }
//   return obj
// }








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/
function every(array, value) {
  var output = true
  array.forEach(el => {
    if (el !== value){
      output= false
    }
  })
  return output
}
console.log(every([3,3], 2))


// function every(arr, value){
//   let output = true
//   arr.forEach(el => {
//     if (el !== value){
//       output = false
//     }
//   })
//   return output
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/
function some(array, value) {
  if (array.indexOf(value) > -1){
    return true
  } else {
    return false
  }
}
console.log(some([3,4], 4))

// function some(arr, val){
//   if (arr.indexOf(val) > -1){
//     return true
//   } else {
//     return false
//   }
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/
function toSentence(array) {
  var string = ''
  if (array.length === 0){
    return string
  }
  var join = array[array.length-2] + " and " + array[array.length-1]
  for (var i=0; i<array.length-2; i++){
    string+=array[i] + ', '
  }
  return string + join
}
console.log(toSentence(["peas", "carrots", "corn"]))

// function toSentence(arr){
//   let str = ''
//   if (arr.length === 0){
//     return str
//   }
//   let temp = arr[arr.length-2] + " and " + arr[arr.length-1]
//   for (let i=0; i<arr.length-2; i++){
//     str+=arr[i] + ', '
//   }
//   return str + temp
// }











/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/
function acronym(array) {
  var output = []
  for (var i= 0; i<array.length; i++){
    output.push(array[i].charAt(0))
  }
  return output.join('')
}
console.log(acronym(["peas", "carrots", "corn"]))

// function acronym(arr){
//   let output = []
//   for (let i=0; i<arr.length; i++){
//     output.push(arr[i].charAt(0))
//   }
//   return output.join('')
// }

//(object[string[i]])
//obj[str.charAt(i)]



/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/
function min(array) {
  if (array.length === 0){
    return undefined
  } else {
    var negative = Infinity
    array.forEach(el => {
      if (el <= negative){
        negative = el
      }
    })
    return negative
  }
}
console.log(min([-1, -2, 4, 5]))
// function min(arr){
//   if (arr.length === 0 ){
//     return undefined
//   } else {
//     let king = Infinity
//     arr.forEach(el => {
//       if (el <= king){
//         king = el
//       }
//     })
//     return king
//   }
// }









/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/
function index(array, property) {
  var object= {}
  if (array.length === 0 ){
    return object
  } else {
    array.forEach(el =>{
      object[el[property]] = el
    })
  }
  return object
}
//console.log(index({id: 1, name: "Joe"}, {id: 2, name: "Sue"}))
// function index(arr, prop){
//   let obj = {}
//   if (arr.length === 0 ){
//     return obj
//   } else {
//     arr.forEach(el =>{
//       obj[el[prop]] = el
//     })
//   }
//   return obj
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/
function invert(object) {
  var output = {}
  for (var key in object){
    output[object[key]] = key
  }
  return output
}
console.log(invert({id: 1, name: "joe"}))
// let obj = {id: 1, name: "Joe"}
// let obj2 = {}
//
// for(let key in obj) {
//   obj2[obj[key]] = key;
// }

// function invert (obj){
//   let output = {}
//   for (var key in obj){
//     output[obj[key]] = key
//   }
//   return output
// }




/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/
function addSignature(name, object) {
  var output = {}
  for (var key in object){
    var newKey = key + '-signed'
    var newValue = object[key] + ' - ' + name
    output[newKey] = newValue
  }
  return output
}

console.log(addSignature({"contract": "Robinson"}, "Lee"))
// function addSignature(name, obj) {
//   let output = {}
//   for (var key in obj){
//      let newKey = key +'-signed'
//      let newVal = obj[key] + ' - ' + name
//      output[newKey] = newVal
//   }
//   return output
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/
function pairs(object) {
  var array = []
  for (var key in object){
    var string = `${key} - ${object[key]}`
    array.push(string)
  }
  return array
}
console.log(pairs({name: "lee", age: 42}))
// function pairs(obj){
//   let arr =[]
//   for (var key in obj){
//      let str = `${key} - ${obj[key]}`
//     arr.push(str)
//   }
//   return arr
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/
function sumValues(object) {
  var count= 0
  for (var key in object){
    count += object[key]
  }
  return count
}
console.log(sumValues({a:2, b:3, c:4}))
// function sumValues(obj){
//   let count = 0
//   for (var key in obj){
//     count += obj[key]
//   }
//   return count
// }






/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/
function biggestProperty(object) {
  var highest = undefined
  var temporary = -Infinity
  for(var key in object){
    if (temporary < object[key]){
      highest = key
      temporary = object[key]
    }
  }
  return highest
}
console.log(biggestProperty({1999: 4036, 2000: 7654, 2001: 8000}))
// function biggestProperty (obj){
//     let king = undefined
//     let temp = -Infinity
//     for (var key in obj){
//       if (temp < obj[key]){
//         king = key
//         temp = obj[key]
//       }
//     }
//     return king
// }












/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/
function keyForValue(object, value) {
  var temporary = undefined
  for(var key in object){
    if (object[key] === value){
      temporary = key
    }
  }
  return temporary
}
console.log({1999: 4036, 2000: 7654}, 7654)
// function keyForValue(obj, val){
//   let temp = undefined
//   for (var key in obj){
//     if (obj[key] === val) {
//       temp = key
//     }
//   }
//   return temp
// }








/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/
function containsValue(object, value) {
  for(var key in object){
    if(object[key] === value){
      return true
    }
  }
    return false
}
console.log(containsValue({1999: 2022, 1998: 2024, 1997: 2026}, 2026))
// function containsValue(obj, val){
//   for (var key in obj){
//     if (obj[key] === val) {
//       return true
//     }
//   }
//   return false
// }







//
