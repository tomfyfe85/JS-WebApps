const NotesModel = require("./notesModel");
const model = new NotesModel();

xdescribe("class NotesModel()", () => {
  it("model.getNote() should return []", () => {
    expect(model.getNotes()).toEqual([]);
  });

  it("returns ['Buy milk', 'Go to the gym']", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
  });

  it("returns empty array again", () => {
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
