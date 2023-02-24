class NotesView {
  constructor(model) {
    this.model = model;
    this.body = document.querySelector("body");
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

    console.log(notes);
  }
}

module.exports = NotesView;
// document.getElementsByClassName("note");
// return notes.forEach((newNote) => {
//     this.mainContainerEl.append((newDiv.innerText = newNote));
