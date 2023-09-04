// Array destructuring - ES5
const person = ['Peter', 'John', 'Zavier'];
console.log("person[0]: ", person[0]);
console.log("person[1]: ", person[1]);
console.log("person[2]: ", person[2]);

// Array destructuring - ES6
// Method 1
const animal = ['lion', 'tiger', 'elephant'];
const [lion, tiger, elephant] = animal;
console.log('lion: ',lion);
console.log('tiger: ', tiger);
console.log('elephant: ', elephant);

// Method 2 
const [apple, mango, orange] = ['apple', 'mango', 'orange'];
console.log('apple: ', apple);
console.log('mango: ', mango);
console.log('orange: ', orange);

// Object destructuring
// Key name and the destructuring name should be the same else undefined
// ES5
const student = {
    name: 'John',
    age: 12,
}
console.log("Student name: ", student.name);
console.log("Student age: ", student.age);

// ES6
// Method 1
const data = {
    machine: 'ASP123',
    machineId: 123
}
const {machine, machineId} = data;
console.log("Machine: ",machine);
console.log("Machine id: ", machineId);

// Method 2
const {name, id} ={
    name: 'ASP123',
    id: 123
    };
console.log("Machine name: ", name);
console.log("MAchine id: ", id);

// Use a new variable.
const { management: School, location: Place } = {
    management: 'BW School',
    location: 'Madurai',
}
console.log("School: ", School);
console.log("Place: ",Place);