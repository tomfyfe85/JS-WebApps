class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    this.newDiv = "";
    this.addNoteButtonEl = document.querySelector("#add-note-button");

    this.addNoteButtonEl.addEventListener("click", () => {
      this.displayNotes();
      console.log("button clicked");
    });
  }

  displayNotes() {
    console.log("displayNotes");

    const inputEl = document.querySelector("#note-input");
    this.model.addNote(inputEl.value);
    const notes = this.model.getNotes();

    // const newDiv = document.createElement("div");
    notes.forEach((note) => {
      this.newDiv = document.createElement("div");
      this.newDiv.classList.add("note");
      this.newDiv.innerText = note;
      this.mainContainerEl.append(this.newDiv);
    });
    inputEl.value = "";
  }
}

module.exports = NotesView;
