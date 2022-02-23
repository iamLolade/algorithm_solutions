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