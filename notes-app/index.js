const NotesModel = require("./notesModel");
const NotesView = require("./notesView1");

const model = new NotesModel();
model.addNote("This is an example note");
model.addNote("This is an example note2");
const view = new NotesView(model);
view.displayNotes();
