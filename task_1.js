//* Problem 1: Word Frequency Counter
//? Function name: wordFrequency(sentence)
//? Statement: Count how many times each word appears in a sentence and return the result as an object.

//? Rules:
//? Ignore case differences

//? Ignore extra spaces

//? Test case 1
//? Input: "I love JS and I love coding and JS is fun"
//? Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }

//? Test case 2
//? Input:  " Hello hello HELLO "
//? Output: { hello: 3 }

// solution

function wordFrequency(sentence) {
    const words = sentence.trim().split(" ");
    let obj = {};
    for(const word of words) {
        const lowerCaseWord = word.toLowerCase();
        if(obj.hasOwnProperty(lowerCaseWord)){
            obj[lowerCaseWord]+=1;
        }
        else{
            obj[lowerCaseWord] = 1;
        }
    }
    return obj;
}

// const result = wordFrequency("I love JS and I love coding and JS is fun");
const result = wordFrequency(" Hello hello HELLO ");
console.log(result);
