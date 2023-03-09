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

  xit("(7) input should be saved in notesModel and no of el's with class 'note' should be 1", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEl = document.querySelector("#note-input");
    inputEl.value = "BEER ME!";

    const addNoteButtonEl = document.querySelector("#add-note-button");
    addNoteButtonEl.click();

    expect(notesModel.getNotes()).toEqual(["BEER ME!"]);
    expect(document.getElementsByClassName("note").length).toEqual(1);
  });

  it("(8) only a list of individual notes should be displayed", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView(notesModel);

    const inputEl1 = document.querySelector("#note-input");
    inputEl1.value = "BEER ME!";

    const addNoteButtonEl = document.querySelector("#add-note-button");
    addNoteButtonEl.click();

    const inputEl2 = document.querySelector("#note-input");
    inputEl2.value = "WINE ME!";
    addNoteButtonEl.click();

    expect(document.getElementsByClassName("note")[0].innerText).toEqual(
      "BEER ME!"
    );
    expect(document.getElementsByClassName("note")[1].innerText).toEqual(
      "WINE ME!"
    );
    expect(document.getElementsByClassName("note").length).toEqual(2);
  });
});
