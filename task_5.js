//* Problem 5: Remove Duplicates From Array
//? Function name: removeDuplicates(arr)
//? Statement:
//?  Return a new array where duplicate values are removed, keeping the original order.

//? Test case 1
//? Input:
//?  [5, 3, 5, 2, 3, 9, 2, 7]
//? Output:
//? [5, 3, 2, 9, 7]

//? Test case 2
//? Input:
//?  [1, 1, 1, 1]
//? Output:
//? [1]

// solution

function removeDuplicates(arr) {
    const newArray = [];
    
    for(const item of arr) {
        if(!newArray.includes(item)) {
            newArray.push(item);
        }
    }
    return newArray;
}

// const result = removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]);
const result = removeDuplicates([1, 1, 1, 1]);
console.log(result);