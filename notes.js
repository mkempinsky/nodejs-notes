console.log('starting notes.js');

module.exports.age = 27;

module.exports.addNote = () => {
    console.log('addNotes');
    return 'New Note:';
};

module.exports.add = (a, b) => {
    return a + b;
};
