const fs = require("fs");

const getNotes = () => {
  return "These are your notes";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("New Note Added");
  } else {
    console.log("Title has used");
  }
};

const deleteNode = (title) => {
  let notes = loadNotes();
  notes = notes.filter((note) => note.title !== title);

  saveNotes(notes);
  console.log(title + " deleted");
};

const readNote = (title) => {
  let notes = loadNotes();

  const note = notes.find((note) => {
    return note.title === title;
  });

  return note;
};

const saveNotes = (notes) => {
  const stringData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", stringData);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    const dataJson = JSON.parse(dataString);
    return dataJson;
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes,
  addNote,
  deleteNode,
  loadNotes,
  readNote,
};
