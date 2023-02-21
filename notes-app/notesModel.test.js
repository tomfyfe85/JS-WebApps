describe('class NotesModel()', () => {
    it('model.getNote() should return []', () => {
       expect(model.getNote()).toEqual([])
    })

    it("returns ['Buy milk', 'Go to the gym']", () => {
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNote()).toEqual(['Buy milk', 'Go to the gym'])
    })

    it("returns empty array again", () => {
        model.reset();
        expect(model.getNote()).toEqual([])
    })
})