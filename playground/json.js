const obj = {
    name: 'Michele'
};
var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const personString = '{"name" : "Michele", "Age" : 27, "Gender" : "Female"}';
const person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
