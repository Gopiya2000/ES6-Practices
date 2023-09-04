// Let can be redeclared only once per scope
let a = 2;
const data = () => {
    let a = 5;
    console.log("Redeclared only once - inside block a: ",a);
}
data();
console.log("Redeclared only once: ",a);

// Var can be redeclared n number of times
var b = 1;
var b = 2;
const hello = () => {
    var b = 3;
    console.log("Redeclared n number of times inside block b: ",b);
}
hello();
console.log("Redeclared n number of times: ",b);

// let - Block scoped variable
let c = 12;
{
    let c = 30;
}
console.log("Block scoped: ", c);

// var - Function scoped variable
var d = 10;
{
    var d = 23;
}
console.log("Function scoped: ",d);

// const - readOnly and values can't be changes
const e = 35;
console.log("ReadOnly and values can't be changes: ",e);
