/**
 * @jest-environment jsdom
 */
// testing class NotesView ie notesView
// will have a method 'displayNotes()' which gets list of notes from
// notesModel and will create a new div element on the page (with an HTML class 'note')

// need to require notesModel and notesModel.addNote('go to bed') 
// 

Describe("NotesView", () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync("./index.html");
  });
   
    it("returns number of divs with class name 'note'", () => {
        const notesView = new NotesView()
        // notesView.displayNotes(model.getNotes)
        expect(document.getElementsByClassName('note').length && document.querySelectorAll('div').length ).toBe(1)
    })
});
