// Property value shorthand - ES5
const data = (name, age, place) => {
    return {
        name: name,
        age: age,
        native: place,
    }
};
console.log("Property value shorthand ES5: ",data('John', 12, 'Chennai'));

// Property value shorthand - ES6
const object = (name, age, place) => {
    return {
        name,
        age,
        native: place,
    }
};
console.log("Property value shorthand ES6: ",object('John', 12, 'Chennai'));

// Computed property keys - ES5
const key = 'age';
const student = {
    name: 'Peter',
};
student[key] = 11;
console.log("Computed property keys ES5: ", student);

// Computed property keys - ES6
const studentData = {
    name: 'Peter',
    [key]: 11,
}
console.log("Computed property keys ES6: ", studentData);

// Method definition shorthand - ES5
const method = {
    name: 'Peter',
    hello: function() {
        return this.name;
    }
}
console.log("Method definition shorthand ES5: ", method);

// Method definition shorthand - ES6
const methodData = {
    name: 'John',
    hello() {
        return this.name;
    }
}
console.log("Method definition shorthand ES6: ", methodData);