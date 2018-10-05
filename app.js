const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

let user = os.userInfo();

const array = [true, true, false, 'a', 1, 1, 2, 3, 'a', false, '1'];

console.log(_.chunk(array, 6));

// console.log(user);
// console.log(`Hello, ${user.username}, you are ${notes.age}. Your uid is: ${user.uid}`);

// let res = notes.addNote();
// console.log(res);

// let sum = notes.add(6, 2);

// console.log('sum:', sum);
