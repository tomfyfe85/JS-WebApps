/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");

describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  xit("(1) creates a new div when notesView.displayNotes(); is called ", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.querySelectorAll("div").length).toBe(2);
  });

 xit("(2) creates a new element with class name 'note'", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.getElementsByClassName("note").length).toBe(1);
  });

  xit("(3) first element with class name 'note' is 'i'm a note!", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.getElementsByClassName("note")[0].innerText).toBe(
      "i'm a note!"
    );
  });

  xit("(4) tests 1,2,3 all pass in the same instance", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.getElementsByClassName("note").length).toBe(1);
    expect(document.querySelectorAll("div").length).toBe(2);
    expect(document.getElementsByClassName("note")[0].innerText).toEqual(
      "i'm a note!"
    );
  });

  xit("(5) notesView.displayNotes() creates 2 divs", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote("i'm a note!");
    notesModel.addNote("i'm a note 2!");
    notesModel.addNote("i'm a note 3!");

    notesView.displayNotes();
    expect(document.querySelectorAll("div").length).toBe(4);
  });

  xit("(6) notesView.displayNotes() creates 3 new divs with class name 'note'", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);
    notesModel.addNote("i'm a note!");
    notesModel.addNote("i'm a note 2!");
    notesModel.addNote("i'm a note 3!");

    notesView.displayNotes();
    expect(document.querySelectorAll("div").length).toBe(4);
    expect(document.getElementsByClassName("note").length).toBe(3);
    expect(document.getElementsByClassName("note")[2].innerText).toEqual(
      "i'm a note 3!"
    );
  });

  it("(7) input should be saved in notesModel", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector("#note-input");
    inputEl.value = "BEER ME!";

    const addNoteButtonEl = document.querySelector('#add-note-button')
    addNoteButtonEl.click();

    expect(notesModel.getNotes()).toEqual(["BEER ME!"]);
  });

  it("(8) when button is clicked the text input should be displayed by first element with class 'note'", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector("#note-input");
    inputEl.value = "BEER ME!";

    const addNoteButtonEl = document.querySelector("#add-note-button");
    addNoteButtonEl.click();

    expect(document.getElementsByClassName("note")[0].innerText).toEqual("BEER ME!");
  });
});
