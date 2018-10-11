// const obj = {
//     name: 'Michele'
// };
// var stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);

// const personString = '{"name" : "Michele", "Age" : 27, "Gender" : "Female"}';
// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

const originalNote = {
    title: 'Notes on Node',
    body: 'Some Body'
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
console.log(note.body);
