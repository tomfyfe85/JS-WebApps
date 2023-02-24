/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const NotesView1 = require("./notesView1");
const NotesModel = require("./notesModel");

describe("NotesView1", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });

  it("(1) creates a new div when notesView.displayNotes(); is called ", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView1(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.querySelectorAll("div").length).toBe(2);
  });

  it("(2) creates a new element with class name 'note'", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView1(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.getElementsByClassName("note").length).toBe(1);
  });

  it("(3) first element with class name 'note' is 'i'm a note!", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView1(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.getElementsByClassName("note")[0].innerText).toBe(
      "i'm a note!"
    );
  });

  it("(4) tests 1,2,3 all pass in the same instance", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView1(notesModel);
    notesModel.addNote("i'm a note!");
    notesView.displayNotes();
    expect(document.getElementsByClassName("note").length).toBe(1);
    expect(document.querySelectorAll("div").length).toBe(2);
    expect(document.getElementsByClassName("note")[0].innerText).toEqual(
      "i'm a note!"
    );
  });

  it("(5) notesView.displayNotes() creates 2 divs", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView1(notesModel);
    notesModel.addNote("i'm a note!");
    notesModel.addNote("i'm a note 2!");
    notesModel.addNote("i'm a note 3!");

    notesView.displayNotes();
    expect(document.querySelectorAll("div").length).toBe(4);
  });

  it("(6) notesView.displayNotes() creates 3 new divs with class name 'note'", () => {
    const notesModel = new NotesModel();
    const notesView = new NotesView1(notesModel);
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
});
// document.getElementsByClassName("note").length &&
