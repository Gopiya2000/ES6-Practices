let a = 12;

// Single line arrow function without return statement
const hello = () => a;
console.log("Without return: ", hello());

// Multiple line arrow funtion
const data = () => {
    return a+1;
}
console.log("With return statement: ", data());

// Single parameter
const option = x => x;
console.log("Single parameter: ", option('Hello!!'));

// Multiple parameter
const parameter = (a, b, c) => {
    return a+b+c;
}
console.log("Multiple parameter: ", parameter(1, 3, 5));

// Default value for parameter
const defaultValue = (d, e = 23) => {
    return d-e;
}
console.log("Default value for parameter: ", defaultValue(30));