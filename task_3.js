//* Problem 3: Password Strength Checker
//? Function name: checkPassword(password)

//? Rules:
//? Length must be at least 8

//? Must contain at least 1 number

//? Must contain at least 1 uppercase letter

//? Must not contain spaces

//? Test case 1
//? Input:  "helloWorld"
//? Output:
//? { valid: false, reasons: ["missing number"] }

//? Test case 2
//? Input:  "Hello123"
//? Output: { valid: true, reasons: [] }

// solution

function checkPassword(password) {
    const reasons = [];
    let hasNumber = false;
    let hasUpperCase = false;

    if(password.length < 8) {
        reasons.push("Length must be at least 8")
    }

    for(const char of password) {
        if(char >= "0" && char <= "9") {
            hasNumber = true;
        }
        if(char >= "A" && char <= "Z") {
            hasUpperCase = true;
        }
    }

    if(!hasNumber) {
        reasons.push("Must contain at least 1 number")
    }
    if(!hasUpperCase) {
        reasons.push("Must contain at least 1 uppercase letter");
    }

    if(password.includes(" ")) {
        reasons.push("Must not contain spaces");
    }

    let valid = null;
    if(reasons.length === 0) {
        valid = true;
    }
    else{
        valid = false;
    }
    return {
        valid,
        reasons
    }
}

// const result = checkPassword("helloWorld");
const result = checkPassword("owor ld");
// const result = checkPassword("Hello 123");
// const result = checkPassword("Hello123");
console.log(result);