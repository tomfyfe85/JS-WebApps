const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();
// model.addNote('hi')
const view = new NotesView(model);
// view.displayNotes();

