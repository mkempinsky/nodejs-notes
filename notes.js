const addNote = (title, body) => {
    console.log('Adding Note:', title, body);
};
const getAll = () => {
    console.log('Getting All Notes');
};
const getNote = title => {
    console.log('Reading Note:', title);
};
const removeNote = title => {
    console.log('Removing note:', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
