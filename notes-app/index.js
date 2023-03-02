const NotesModel = require("./notesModel");
const NotesView = require("./notesView1");

const model = new NotesModel();

const view = new NotesView(model);
view.displayNotes();
