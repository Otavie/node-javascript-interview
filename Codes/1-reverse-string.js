// Write a function to reverse a string without using built-in reverse functions.
function reverseString(str) {
    let reverseStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str[i]
    }

    return reverseStr;
}

console.log(reverseString('Hello Boss'))