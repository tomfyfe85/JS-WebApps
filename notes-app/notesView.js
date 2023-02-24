class NotesView {
  constructor(model) {
    this.model = model;
    this.body = document.querySelector("#main-container");
    this.newDiv = "";
  }

  displayNotes() {
    const notes = this.model.getNotes();
    // const newDiv = document.createElement("div");
    notes.forEach((note) => {
      this.newDiv = document.createElement("div");
      this.newDiv.classList.add("note");
      this.newDiv.innerText = note;
      this.body.append(this.newDiv);
    });
  }
}

module.exports = NotesView;
