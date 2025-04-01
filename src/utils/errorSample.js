// sampleWithErrors.js

console.log("This is a sample file with ESLint errors");

function sayHello(name) {
    console.log("Hello, " + name); // Expected: use template strings, not concatenation
}

sayHello("World");

function unusedFunction() {
    console.log("This function is not used anywhere");
} // Expected: Unused function
