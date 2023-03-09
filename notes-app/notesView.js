class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector("#main-container");
    this.newDiv = "";
    this.addNoteButtonEl = document.querySelector("#note-input");

    this.addNoteButtonEl.addEventListener("click", () => {
      console.log("button clicked");
    });
  }

  displayNotes() {
    const notes = this.model.getNotes();
    // const newDiv = document.createElement("div");
    notes.forEach((note) => {
      this.newDiv = document.createElement("div");
      this.newDiv.classList.add("note");
      this.newDiv.innerText = note;
      this.mainContainerEl.append(this.newDiv);
    });
  }
}

module.exports = NotesView;
