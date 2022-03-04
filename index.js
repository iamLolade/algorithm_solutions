// Codewars algorithm solutions


// Q. List Filtering | Kata 7
// Return a new array with the strings filtered out
const filter_list = (array) => {
    //Using filter - array iteration method
    return array.filter(value => {
      return typeof(value) === "number"
    })
    
}

console.log(filter_list([1,2,'a','b']));


// Q. Isograms | Kata 7

// Steps
// Create empty object to keep track of character occurrence
// Convert word to lowercase
// Loop through word
// Get array of object values
// Loop through values to confirm number of occurrence

function isIsogram(str){
    //...
    let map = {};
    let word = str.toLowerCase();
    
    for(let i = 0; i < word.length; i++) {
      let char = word[i] 
      if(map[char]) {
        map[char]++;
      } else {
        map[char] = 1;
      }
    }
    let countArray = Object.values(map);
    return countArray.every(elem => elem === 1);
}

console.log(isIsogram("Occurrence"))


// Q. Highest and Lowest | Kata 7

// Steps
// Convert string of numbers to an array of integers
// Use JS Math functions to get highest and lowest integers
// Return result with template literal

function highAndLow(numbers){
  // ...
  let numArray = numbers.split(" ").map(val => parseInt(val))
  
  let highest = Math.max(...numArray);
  let lowest = Math.min(...numArray);
  
  return `${highest} ${lowest}`
}

// Q Find the stray number | Kata 7

// Steps 
// Create object to keep track of occurrences
// Loop through to return key(number) with 1 occurrence

function stray(numbers) {
  let data = {};
  
  for(let i = 0; i < numbers.length; i++) {
    let num = numbers[i]
    if(data[num]) {
      data[num]++
    } else {
      data[num] = 1;
    }
  }
  
  for(let num in data) {
    if(data[num] == 1) return parseInt(num)
  }
}

// Q Categorize New Number | Kata 7

// Steps
// Create a empty array for result
// Loop through data
// Ternary to check condition

function openOrSenior(data){
  // ...
  let result = []
  for(let i = 0; i < data.length; i++) {
    let subArray = data[i]
    subArray[0] < 55 || subArray[1] < 8 ? result.push("Open") : result.push("Senior")
  }
  return result;
}

//Q String ends with? | Kata 7

function solution(str, ending){
  // Use string method .endsWith()
  return str.endsWith(ending)
}

// Q shorter concat [reverse longer]

// Steps
// Declare and initialize variable with string lengths
// Write condition to compare string lengths
// Convert longest string to array, reverse, and covert back to string
// Return result in required format

function shorter_reverse_longer(a,b){
  let firstSize = a.length;
  let secondSize = b.length;
  
  if(firstSize > secondSize || firstSize === secondSize) {
    
    let reverse = a.split("").reverse().join("");
    return `${b}${reverse}${b}` 
    
  } else  {
    
      let reverse = b.split("").reverse().join("");
      return `${a}${reverse}${a}`
      
    }
}




