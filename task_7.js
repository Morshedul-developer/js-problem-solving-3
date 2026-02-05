//* Problem 7: Text Stats Generator
//? Function name: textStats(text)

//? Statement: Return an object containing:

//? Characters count excluding spaces

//? Words count

//? Vowels count

//? Consonants count

//? Test case 1
//? Input:
//?  "JavaScript is fun to learn"
//? Output:
//? { characters: 22, words: 5, vowels: 8, consonants: 14 }

//? Test case 2
//? Input:
//?  " I am OK "
//? Output:
//? { characters: 5, words: 3, vowels: 3, consonants: 2 }

// solution

function textStats(text) {
    let total = 0;
    let vowels = 0;
    let consonants = 0;

    const wordList = text.trim().split(" ");

    for(const word of wordList) {
        total = total + word.length;
    }

    for(const char of text.toLowerCase()) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            vowels++;
        }
        else {
            if(char !== " ") {
                consonants++;
            }
        }
    }

    const characters = total;
    const words = wordList.length;
    return {
        characters,
        words,
        vowels,
        consonants
    };
}

// const result = textStats("JavaScript is fun to learn");
const result = textStats(" I am OK ");
console.log(result);