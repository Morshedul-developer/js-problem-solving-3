//* Problem 6: Phonebook Prefix Search
//? Function name: searchByPrefix(phoneBook, prefix)
//? Statement:
//?  Return an array of names that start with the given prefix.

//? Test case 1
//? Input:
//? phoneBook = { raju: "0181", karim: "0172", rafi: "0193" };
//? prefix = "ra";

//? Output:
//? ["raju", "rafi"]

//? Test case 2
//? Input:
//? phoneBook = { mina: "013", mim: "014", rina: "015" };
//? prefix = "mi";

//? Output:
//? ["mina", "mim"]

// solution

function searchByPrefix(phoneBook, prefix) {
    const arr = [];

    for(const item in phoneBook) {
        if(item.startsWith(prefix)) {
            arr.push(item);
        }
    }

    return arr;
}

// const result = searchByPrefix({ raju: "0181", karim: "0172", rafi: "0193" }, "ra");
const result = searchByPrefix({ mina: "013", mim: "014", rina: "015" }, "mi");
console.log(result);