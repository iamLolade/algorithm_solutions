// Q Weight for weight | Kata 5

// STEPS
// Create function to add digits
// Compare weights as number and string (if weights are equal)

function orderWeight(string) {
    // your code
  const sumDigit = num => num.split('').reduce((sum, digit) => sum + parseInt(digit),0)
  
  return string.split(' ').sort((a, b) => {
    const weightA = sumDigit(a)
    const weightB = sumDigit(b)
    
    if(weightA > weightB) {
      return 1
    } else if(weightA < weightB) {
      return -1
    }

    if(a > b) {
      return 1
    } else if(a < b){
      return -1
    } else {
      return 0
    }
    

  }).join(' ')
}