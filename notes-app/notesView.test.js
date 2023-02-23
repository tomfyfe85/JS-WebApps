/**
 * @jest-environment jsdom
 */
// testing class NotesView ie notesView
// will have a method 'displayNotes()' which gets list of notes from
// notesModel and will create a new div element on the page (with an HTML class 'note')

// need to require notesModel and notesModel.addNote('go to bed') ?
//
const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("returns number of divs", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.querySelectorAll("div").length).toBe(2);
  });
});

// document.getElementsByClassName("note").length &&
