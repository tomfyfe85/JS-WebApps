class NotesView {
  constructor(model) {
    this.model = model;
    this.array = [];
    this.mainContainerEl = document.querySelector("#main-container");
    this.newDiv = "";
    document.querySelector("#add-note-button").addEventListener("click", () => {
      this.displayNotes();
    });
  }

  displayNotes() {
    const inputEl = document.querySelector("#note-input");
    this.model.addNote(inputEl.value);
    const notes = this.model.getNotes();

    console.log(notes);
    console.log(notes.slice(-1));
    notes.slice(-1).forEach((note) => {
      this.newDiv = document.createElement("div");
      this.newDiv.classList.add("note");
      this.newDiv.innerText = note;
      this.mainContainerEl.append(this.newDiv);
    });
    inputEl.value = "";
    
  }
}

module.exports = NotesView;
