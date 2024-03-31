// Longest word in a string


function findLongsword(str) {
    // Split the string into an array of words
    const words = str.split(" ");
  
    // Initialize a variable to store the longest word
    let longestWord = "";
  
    // Iterate through each word in the array
    for (let word of words) {
        // If the current word is longer than the longestWord, update longestWord
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
  
    return longestWord;
}

console.log(findLongsword("hey there i am developer"));