class NotesView {
  constructor(model) {
    this.model = model;
    this.body = document.querySelector("body");
  }

  displayNotes() {
    const notes = this.model.getNotes();
    const newDiv = document.createElement("div");
    newDiv.classList.add("note");
    newDiv.innerText = notes;
   
   
      this.body.append(newDiv);
    
  }
}

module.exports = NotesView;
 // document.getElementsByClassName("note");
// return notes.forEach((newNote) => {
//     this.mainContainerEl.append((newDiv.innerText = newNote));
