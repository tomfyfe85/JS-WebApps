class NotesModel {
  constructor() {
    this.array = [];
  }

  addNote(note) {
    this.array.push(note);
  }

  reset() {
    this.array = [];
  }

  getNotes() {
    return this.array;
  }
}

module.exports = NotesModel;
