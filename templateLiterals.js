var name = 'gopiya';
var place = 'chennai';

// ES5
var data = "My name is" + " " + name + " " + "and i live in" + " " + place;
console.log("ES5: ", data);

// ES6 (string interpolation)
var sentence = `My name is ${name} and i live in ${place}`;
console.log("ES6: ",sentence);

// ES5 multi-line without template literals
console.log('Hello!! \n Hi!!');   

// ES6 multi-line texts with template literals
var multiLine =`Hello!!!
                Hi!!!
                Bye!!!`
console.log("Multi-line: ", multiLine);

// Js variable declarations are hoisted
// Declaration of the variable will move on top in compile phase
x = 10;
console.log("Js variable declarations are hoisted: ",x)
var x;

// Tagged templates
const templates = (str, val1) => {
    console.log("Tagged templates str: ", str)
    console.log("Tagged templates val1: ", val1)
}
const dataLength = 12;
templates `Hello ${dataLength}`;

// Raw string
const dataString = String.raw`Hello!! /n Thank you.`;
console.log("Raw string: ", dataString);