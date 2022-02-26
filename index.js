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

