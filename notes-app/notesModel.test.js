const NotesModel = require('./notesModel')
const model = new NotesModel()

describe('class NotesModel()', () => {
    it('model.getNote() should return []', () => {
       expect(model.getNote()).toEqual([])
    })

    xit("returns ['Buy milk', 'Go to the gym']", () => {
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNote()).toEqual(['Buy milk', 'Go to the gym'])
    })

   xit("returns empty array again", () => {
        model.reset();
        expect(model.getNote()).toEqual([])
    })
})