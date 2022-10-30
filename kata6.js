// Q Counting Duplicate | Kata 6

// STEPS
// Create object to keep track of occurrence
// Convert all letters toLowerCase
// Create placeholder to store number of duplicate
// Loop letters to check duplicates and increase duplicate placeholder  

function duplicateCount(text){
    //...
    const counts = {}
    const letters = text.toLowerCase()
    let numOfDuplicates = 0

    for(let i = 0; i < letters.length; i++) {
        let letter = letters[i]

        if(!counts[letter]) {
        counts[letter] = 1  
        } else if(counts[letter] === 1) {
        counts[letter]++
        numOfDuplicates++
        }
    }

    return numOfDuplicates
}